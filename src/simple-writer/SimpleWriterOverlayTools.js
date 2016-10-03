import { OverlayTools } from 'substance'

/*
  A Renders the content for the overlay (aka popup) tools.
*/
class SimpleWriterOverlayTools extends OverlayTools {

  getToolStyle(toolName) {
    if (toolName === 'edit-link') {
      // Use Substance outline-dark style for core tools
      return 'outline-dark'
    }
    else {
      return 'simple';
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
