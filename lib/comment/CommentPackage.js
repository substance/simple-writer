import { AnnotationTool } from 'substance'
import Comment from './Comment'
import CommentCommand from './CommentCommand'
import EditCommentCommand from './EditCommentCommand'
import EditCommentTool from './EditCommentTool'
import CommentConverter from './CommentConverter'

export default {
  name: 'link',
  configure: function(config, options) {
    config.addNode(Comment)
    config.addConverter('html', CommentConverter)

    // Tool to insert a new comment
    config.addCommand('comment', CommentCommand, {nodeType: 'comment'})
    config.addTool('comment', AnnotationTool, {target: options.toolTarget || 'annotations'})
    // Tool to edit an existing comment
    config.addCommand('edit-comment', EditCommentCommand, {nodeType: 'comment'})
    config.addTool('edit-comment', EditCommentTool, { target: 'overlay' })

    // Icons and labels
    config.addIcon('comment', { 'fontawesome': 'fa-comment'})
    config.addLabel('comment', 'Comment')
  }
}
