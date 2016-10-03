import { Component, ContainerEditor } from 'substance'

class BodyComponent extends Component {
  render($$) {
    let node = this.props.node;
    let el = $$('div')
      .addClass('sc-body')
      .attr('data-id', this.props.node.id);

    el.append(
      $$(ContainerEditor, {
        disabled: this.props.disabled,
        node: node,
        commands: this.props.commands,
        textTypes: this.props.textTypes
      }).ref('body')
    );
    return el;
  }
}

export default BodyComponent