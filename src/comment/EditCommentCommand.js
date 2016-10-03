import { AnnotationCommand } from 'substance'

class EditCommentCommand extends AnnotationCommand {

  canCreate() {
    return false
  }

  canTruncate() {
    return false
  }

  canDelete() {
    return false
  }

  canFuse() {
    return false
  }

  canExpand() {
    return false
  }

  canEdit(annos) {
    return annos.length === 1
  }

}

export default EditCommentCommand
