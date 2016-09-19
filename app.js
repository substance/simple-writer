import {
  Component, ProseEditor,
  ProseEditorConfigurator, DocumentSession
} from 'substance'

import AppPackage from './AppPackage'
import fixture from './fixture'

class App extends Component {
  render($$) {
    var el = $$('div').addClass('sc-app')
    el.append($$(ProseEditor, {
      documentSession: this.props.documentSession,
      configurator: this.props.configurator
    }))
    return el
  }
}

var configurator = new ProseEditorConfigurator().import(AppPackage);
window.onload = function() {
  // Creates a ProseArticle based on the ProseEditorConfig
  var doc = configurator.createArticle(fixture);
  var documentSession = new DocumentSession(doc);

  App.mount({
    documentSession: documentSession,
    configurator: configurator
  }, document.body)
};
