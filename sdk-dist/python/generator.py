import dataclasses
from pydoc import html
from tokenize import t

import docspec
from pydoc_markdown import MarkdownRenderer
from pydoc_markdown.interfaces import Context
from pydoc_markdown.contrib.loaders.python import PythonLoader
from pydoc_markdown.contrib.renderers.docusaurus import DocusaurusRenderer, CustomizedMarkdownRenderer


@dataclasses.dataclass
class FixedMarkdownRenderer(CustomizedMarkdownRenderer):
    """Customize markdown renderer. The original version has some error"""

    def _render_object(self, fp, level: int, obj: docspec.ApiObject):
        if not isinstance(obj, docspec.Module) or self.render_module_header:
            if not isinstance(obj, docspec.Indirection):
                self._render_header(fp, level, obj)

        render_view_source = not isinstance(obj, (docspec.Module, docspec.Variable))

        if render_view_source:
            url = self.source_linker.get_source_url(obj) if self.source_linker else None
            source_string = self.source_format.replace('{url}', str(url)) if url else None
            if source_string and self.source_position == 'before signature':
                fp.write(source_string + '\n\n')

        self._render_signature_block(fp, obj)

        if render_view_source:
            if source_string and self.source_position == 'after signature':
                fp.write(source_string + '\n\n')

        if obj.docstring:
            docstring = html.escape(obj.docstring.content) if self.escape_html_in_docstring else obj.docstring.content
            lines = docstring.split('\n')
            if self.docstrings_as_blockquote:
                lines = ['> ' + x for x in lines]
            fp.write('\n'.join(lines))
            fp.write('\n\n')


context = Context(directory='.')
loader = PythonLoader(search_path=['src'],
                      packages=["etherdata_sdk"],
                      ignore_when_discovered=["tests", "examples"])
renderer = DocusaurusRenderer(docs_base_path="../../docs/docs/python",
                              markdown=FixedMarkdownRenderer(render_module_header=False, render_page_title=False),
                              relative_output_path="api")

loader.init(context)
renderer.init(context)

modules = loader.load()
renderer.render(modules)
