import { AnnotationCommand } from 'substance'

/**
  Command implementation used for creating, expanding and
  truncating comments.

  Fusion and deletion are disabled as these are handled by EditCommentTool.
*/
class CommentCommand extends AnnotationCommand {
  canFuse()   { return false }
  canDelete() { return false }
}

export default CommentCommand
