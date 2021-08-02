const { PreactHTMLConverter } = require('preact-html-converter')
const safeMarkdown = require('./lib/safeMarkdown')
const sanitize = require('./lib/sanitize')

const converter = PreactHTMLConverter()

function Markdown (props) {
  return converter.convert(safeMarkdown(props.html))
}

module.exports = {
  Markdown,
  sanitize,
  safeMarkdown
}
