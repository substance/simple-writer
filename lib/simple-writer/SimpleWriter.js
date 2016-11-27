import { AbstractEditor, Toolbar} from 'substance'

/**
  We extend from AbstractEditor which provides an abstract implementation
  that should be feasible for most editors.
*/
class SimpleWriter extends AbstractEditor {

  /*
    We render a toolbar, an editor for the body content
  */
  render($$) {
    let SplitPane = this.componentRegistry.get('split-pane')
    let el = $$('div').addClass('sc-simple-writer')
    let ScrollPane = this.componentRegistry.get('scroll-pane')
    let Overlay = this.componentRegistry.get('overlay')
    let ContextMenu = this.componentRegistry.get('context-menu')
    let DropTeaser = this.componentRegistry.get('drop-teaser')
    let commandStates = this.commandManager.getCommandStates()
    let configurator = this.props.editorSession.getConfigurator()
    let Body = this.componentRegistry.get('body')
    let contentPanel = $$(ScrollPane, {
      scrollbarPosition: 'right'
    }).append(
      $$(Body, {
        disabled: this.props.disabled,
        node: this.doc.get('body'),
        commands: configurator.getSurfaceCommandNames(),
        textTypes: configurator.getTextTypes()
      }).ref('body'),
      $$(Overlay),
      $$(ContextMenu),
      $$(DropTeaser)
    ).ref('contentPanel')

    el.append(
      $$(SplitPane, {splitType: 'horizontal'}).append(
        $$(Toolbar, {
          commandStates: commandStates
        }).ref('toolbar'),
        contentPanel
      )
    )
    return el
  }
}

export default SimpleWriter
