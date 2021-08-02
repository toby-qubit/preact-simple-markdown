const snarkdown = require('snarkdown')
const sanitize = require('./sanitize')

const safeMarkdown = (markdown) => {
  const html = snarkdown(markdown)
  const doc = new DOMParser().parseFromString(
    `<!DOCTYPE html><html><body>${html}`,
    'text/html'
  )

  doc.normalize()
  sanitize(doc.body)

  return doc.body.innerHTML
}

module.exports = safeMarkdown