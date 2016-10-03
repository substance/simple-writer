import { AbstractEditor, Toolbar} from 'substance'
import SimpleWriterOverlayTools from './SimpleWriterOverlayTools'

/**
  We extend from AbstractEditor which provides an abstract implementation
  that should be feasable for most editors. Of course if you need full
  control you could setup everything yourself too.
*/
class SimpleWriter extends AbstractEditor {
  /*
    We render a toolbar, an editor for the body content
  */
  render($$) {
    let SplitPane = this.componentRegistry.get('split-pane')
    let el = $$('div').addClass('sc-simple-writer')
    let toolbar = this._renderToolbar($$)
    let editor = this._renderEditor($$)
    let ScrollPane = this.componentRegistry.get('scroll-pane')

    let contentPanel = $$(ScrollPane, {
      scrollbarPosition: 'right',
      overlay: SimpleWriterOverlayTools,
    }).append(editor).ref('contentPanel')

    el.append(
      $$(SplitPane, {splitType: 'horizontal'}).append(
        toolbar,
        contentPanel
      )
    )
    return el
  }

  _renderToolbar($$) {
    let commandStates = this.commandManager.getCommandStates()
    return $$(Toolbar, {
      commandStates: commandStates
    }).ref('toolbar')
  }

  _renderEditor($$) {
    let configurator = this.props.configurator
    let Body = this.componentRegistry.get('body')

    return $$(Body, {
      disabled: this.props.disabled,
      node: this.doc.get('body'),
      commands: configurator.getSurfaceCommandNames(),
      textTypes: configurator.getTextTypes()
    }).ref('body')
  }

  documentSessionUpdated() {
    // Update toolbar states
    let toolbar = this.refs.toolbar
    if (toolbar) {
      let commandStates = this.commandManager.getCommandStates()
      toolbar.setProps({
        commandStates: commandStates
      })
    }
  }
}

export default SimpleWriter
