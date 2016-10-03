import { PropertyAnnotation, Fragmenter } from 'substance'

class Comment extends PropertyAnnotation {}

Comment.define({
  type: 'comment',
  content: { type: 'string', optional: true }
})

// in presence of overlapping annotations will try to render this as one element
Comment.fragmentation = Fragmenter.SHOULD_NOT_SPLIT

export default Comment
