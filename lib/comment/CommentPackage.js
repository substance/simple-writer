import { AnnotationTool, EditAnnotationCommand } from 'substance'
import Comment from './Comment'
import CommentCommand from './CommentCommand'
import EditCommentTool from './EditCommentTool'
import CommentConverter from './CommentConverter'

/**
  Comment package that can be imported by SimpleWriter

  Provides a Comment node definition, a converter for HTML conversion,
  commands and tools for creation, and editing of comments.
*/
export default {
  name: 'link',
  configure: function(config, options) {
    config.addNode(Comment)
    config.addConverter('html', CommentConverter)

    // Tool to insert a new comment
    config.addCommand('comment', CommentCommand, {nodeType: 'comment'})
    config.addTool('comment', AnnotationTool, {toolGroup: options.toolGroup || 'annotations'})
    // Tool to edit an existing comment, should be displayed as an overlay
    config.addCommand('edit-comment', EditAnnotationCommand, {nodeType: 'comment'})
    config.addTool('edit-comment', EditCommentTool, { toolGroup: 'overlay' })

    // Icons and labels
    config.addIcon('comment', { 'fontawesome': 'fa-comment'})
    config.addLabel('comment', 'Comment')
  }
}
