export default {

  type: 'comment',
  tagName: 'span',

  matchElement: function(el) {
    return el.is('span[data-type="comment"]')
  },

  import: function(el, node) {
    node.content = el.attr('data-comment')
  },

  export: function(node, el) {
    el.attr({
      'data-type': 'comment',
      'data-comment': node.content
    }.append(node.content))
  }
}
