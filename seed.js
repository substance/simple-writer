import { Configurator, JSONConverter, documentHelpers, series } from 'substance'
import SimpleWriterPackage from './lib/simple-writer/SimpleWriterPackage'
import htmlFixture from './app/fixture'

/*
  Setup configurator
*/
let configurator = new Configurator()
configurator.import(SimpleWriterPackage)

let htmlImporter = configurator.createImporter('html')
let doc = htmlImporter.importDocument(htmlFixture)
let initialChange = documentHelpers.getChangeFromDocument(doc)

let jsonConverter = new JSONConverter()
let v1Snapshot = jsonConverter.exportDocument(doc)

// addChange(documentId, change, cb) {
export default function seed(changeStore, snapshotStore, cb) {
  // NOTE: We know that our in-memory stores are synchronous, so we can
  // just call one method after another and provide a fake callback fn

  series([
    (cb) => {
      changeStore.addChange('example-doc', initialChange, cb)
    },
    (cb) => {
      snapshotStore.saveSnapshot('example-doc', 1, v1Snapshot, cb)
    }
  ], cb)
}
