from typing import Optional, List, Dict, cast
import docspec
from pydoc_markdown import PydocMarkdown, FilterProcessor, CrossrefProcessor, SmartProcessor, logger
from pydoc_markdown.contrib.renderers.markdown import MarkdownReferenceResolver
from pydoc_markdown.interfaces import Resolver
from pydoc_markdown.contrib.loaders.python import PythonLoader
from pydoc_markdown.contrib.renderers.docusaurus import DocusaurusRenderer, CustomizedMarkdownRenderer
from pydoc_markdown.util.docspec import ApiSuite


class FixedMarkdownReferenceResolver(MarkdownReferenceResolver):
    def generate_object_id(self, obj: docspec.ApiObject) -> str:
        return f"{obj.path[len(obj.path) - 1].name.lower()}-objects"

    # Resolver
    def resolve_ref(self, scope: docspec.ApiObject, ref: str) -> Optional[str]:
        target = self._resolve_local_reference(scope, ref.split('.'))
        if target:
            data = self.generate_object_id(target)
            return '#' + self.generate_object_id(target)
        return None


class FixedCrossrefProcessor(CrossrefProcessor):

    def process(self, modules: List[docspec.Module], resolver: Optional[Resolver]) -> None:
        resolver = FixedMarkdownReferenceResolver()

        unresolved: Dict[str, List[str]] = {}
        docspec.visit(modules,
                      lambda x: self._preprocess_refs(x, cast(Resolver, resolver), ApiSuite(modules), unresolved))

        if unresolved:
            summary = []
            for uid, refs in unresolved.items():
                summary.append('  {}: {}'.format(uid, ', '.join(refs)))

            logger.warning(
                '%s cross-reference(s) could not be resolved:\n%s',
                sum(map(len, unresolved.values())),
                '\n'.join(summary),
            )


loader = PythonLoader(search_path=['src'],
                      packages=["etherdata_sdk"],
                      ignore_when_discovered=["tests", "examples"])
renderer = DocusaurusRenderer(docs_base_path="../../docs/docs/python",
                              relative_output_path="api")

config = PydocMarkdown(
    loaders=[loader],
    processors=[FilterProcessor(skip_empty_modules=True),
                FixedCrossrefProcessor(), SmartProcessor()],
    renderer=renderer
)
modules = config.load_modules()
config.process(modules)
config.render(modules)
