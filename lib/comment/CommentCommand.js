import { AnnotationCommand } from 'substance'

class CommentCommand extends AnnotationCommand {

  /*
    Disable fusion and deletion. Deletion is dona via EditCommentTool.
  */
  canFuse() { return false }

  canDelete() { return false }
}

export default CommentCommand
