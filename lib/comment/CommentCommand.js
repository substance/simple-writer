import { AnnotationCommand } from 'substance'

class CommentCommand extends AnnotationCommand {

  getAnnotationData() {
    return {
      content: ''
    }
  }

  canFuse() {
    return false
  }

  canDelete() {
    return false
  }

}

export default CommentCommand
