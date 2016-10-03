import { OverlayTools } from 'substance'

/**
  Renders the content for the overlay (aka popup) tools.

  We are using a default implementation (OverlayTools), however
  if you need full control you could render tools yourself,
  by inspecting this.props.commandStates
*/
class SimpleWriterOverlayTools extends OverlayTools {

  getToolStyle(toolName) {
    if (toolName === 'edit-link') {
      // Use Substance outline-dark style for core tools
      return 'outline-dark'
    }
  }

  getClassNames() {
    let commandStates = this.props.commandStates
    let classNames = [ 'sc-simple-writer-overlay-tools' ]

    // Use a custom overlay style for comment editor
    if (!commandStates['edit-comment'].disabled) {
      classNames.push('sm-comment-style')
    }

    return classNames.join(' ')
  }
}

export default SimpleWriterOverlayTools
