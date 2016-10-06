import { OverlayTools } from 'substance'

/**
  Renders the content for the overlay (aka popup) tools.

  We are using a default implementation (OverlayTools), however
  if you need full control you could render tools yourself,
  by inspecting this.props.commandStates
*/
class SimpleWriterOverlayTools extends OverlayTools {

  getToolStyle() {
    return 'outline-dark'
  }

  getClassNames() {
    return 'sc-simple-writer-overlay-tools'
  }
}

export default SimpleWriterOverlayTools
