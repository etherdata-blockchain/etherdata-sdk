from pydoc_markdown.interfaces import Context
from pydoc_markdown.contrib.loaders.python import PythonLoader
from pydoc_markdown.contrib.renderers.markdown import MarkdownRenderer
from pydoc_markdown.contrib.renderers.docusaurus import DocusaurusRenderer

context = Context(directory='.')
loader = PythonLoader(search_path=['src'])
renderer = DocusaurusRenderer()

loader.init(context)
renderer.init(context)

modules = loader.load()
renderer.render(modules)
