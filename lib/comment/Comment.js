import { PropertyAnnotation, Fragmenter } from 'substance'

/**
  Comment node type, based on PropertyAnnotation. Defines
  comment property which holds the comment content as a string.
*/
class Comment extends PropertyAnnotation {}

Comment.define({
  type: 'comment',
  content: { type: 'string', default: '' }
})

// in presence of overlapping annotations will try to render this as one element
Comment.fragmentation = Fragmenter.SHOULD_NOT_SPLIT

export default Comment