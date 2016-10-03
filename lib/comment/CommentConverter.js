export default {

  type: 'comment',
  tagName: 'span',

  /**
    Custom matcher, needed as matching by tagName is not sufficient
  */
  matchElement: function(el) {
    return el.is('span[data-type="comment"]')
  },

  /**
    Extract comment string from the data-comment attribute
  */
  import: function(el, node) {
    node.content = el.attr('data-comment')
  },

  /**
    Serialize comment node to span with data-type and data-comment
    attributes.
  */
  export: function(node, el) {
    el.attr({
      'data-type': 'comment',
      'data-comment': node.content
    }.append(node.content))
  }
}
