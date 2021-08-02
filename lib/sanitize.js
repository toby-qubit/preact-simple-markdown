const sanitize = (node) => {
  if (node.nodeType === 3) return

  if (
    node.nodeType !== 1 ||
    /^(script|iframe|object|embed|svg)$/i.test(node.tagName)
  ) {
    return node.remove()
  }

  for (let i = node.attributes.length; i--; ) {
    const name = node.attributes[i].name

    if (!/^(class|id|name|href|src|alt|align|valign)$/i.test(name)) {
      node.attributes.removeNamedItem(name)
    }
  }

  for (let i = node.childNodes.length; i--; ) sanitize(node.childNodes[i])
}

module.exports = sanitize
