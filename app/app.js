import { Configurator, DocumentSession } from 'substance'
import SimpleWriter from '../lib/simple-writer/SimpleWriter'
import SimpleWriterPackage from '../lib/simple-writer/SimpleWriterPackage'
import fixture from './fixture'

let cfg = new Configurator()
cfg.import(SimpleWriterPackage)

window.onload = function() {
  // Creates a ProseArticle based on the config
  let importer = cfg.createImporter('html')
  let doc = importer.importDocument(fixture)
  let documentSession = new DocumentSession(doc)

  SimpleWriter.mount({
    documentSession: documentSession,
    configurator: cfg
  }, document.body)
}
