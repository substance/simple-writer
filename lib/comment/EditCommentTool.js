import { Tool } from 'substance'

/**
  Simple comment editor, based on a regular
  input field. Changes are saved when the input
  field is blurred.
*/
class EditCommentTool extends Tool {

  render($$) {
    let Input = this.getComponent('input')
    let Button = this.getComponent('button')
    let el = $$('div').addClass('sc-edit-comment-tool')

    el.append(
      $$(Input, {
        type: 'text',
        path: [this.props.node.id, 'content'],
        placeholder: 'Please enter comment here'
      }),
      $$(Button, {
        icon: 'delete',
        style: this.props.style
      }).on('click', this.onDelete)
    )
    return el
  }

  onDelete(e) {
    e.preventDefault();
    let node = this.props.node
    let session = this.context.editorSession
    session.transaction(function(tx, args) {
      tx.delete(node.id)
      return args
    })
  }
}

export default EditCommentTool
