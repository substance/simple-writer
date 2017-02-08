export default {
  type: 'body',
  tagName: 'body',

  import: function(el, node, converter) {
    node.id = 'body'
    node.nodes = el.getChildren().map(function(child) {
      var childNode = converter.convertElement(child)
      return childNode.id
    })
  },

  export: function(node, el, converter) {
    el.append(converter.convertNodes(node.nodes))
  }
}
