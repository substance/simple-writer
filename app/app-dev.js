import { Configurator, EditorSession } from 'substance'
import SimpleWriter from '../lib/simple-writer/SimpleWriter'
import SimpleWriterPackage from '../lib/simple-writer/SimpleWriterPackage'
import fixture from './fixture'

let cfg = new Configurator()
cfg.import(SimpleWriterPackage)

window.onload = function() {
  // Import article from HTML markup
  let importer = cfg.createImporter('html')
  let doc = importer.importDocument(fixture)
  // This is the data structure manipulated by the editor
  let editorSession = new EditorSession(doc, {
    configurator: cfg
  })
  // Mount SimpleWriter to the DOM and run it.
  SimpleWriter.mount({
    editorSession: editorSession
  }, document.body)
}
