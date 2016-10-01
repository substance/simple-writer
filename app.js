import {
  ProseEditor, Configurator, DocumentSession
} from 'substance'

import fixture from './fixture'
import SimpleWriterPackage from './src/simple-writer/SimpleWriterPackage'


let cfg = new Configurator()
cfg.import(SimpleWriterPackage)

window.onload = function() {
  // Creates a ProseArticle based on the config
  let importer = cfg.createImporter('html')
  let doc = importer.importDocument(fixture)
  let documentSession = new DocumentSession(doc)

  ProseEditor.mount({
    documentSession: documentSession,
    configurator: cfg
  }, document.body)
}
