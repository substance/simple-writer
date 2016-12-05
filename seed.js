import { Configurator, JSONConverter, documentHelpers } from 'substance'
import SimpleWriterPackage from './lib/simple-writer/SimpleWriterPackage'
import htmlFixture from './app/fixture'

/*
  Setup configurator
*/
let configurator = new Configurator()
configurator.import(SimpleWriterPackage)

const DOCUMENT_STORE_SEED = {
  'example-doc': {
    documentId: 'example-doc',
    schemaName: 'simple-article',
    version: 1 // document has one change = version 1
  }
}

let htmlImporter = configurator.createImporter('html')
let doc = htmlImporter.importDocument(htmlFixture)
let initialChange = documentHelpers.getChangeFromDocument(doc)

const CHANGE_STORE_SEED = {
  'example-doc': [initialChange]
}


let jsonConverter = new JSONConverter()
let v1Snapshot = jsonConverter.exportDocument(doc)

const SNAPSHOT_STORE_SEED = {
  'example-doc': {
    1: v1Snapshot
  }
}

export default {
  documentStore: DOCUMENT_STORE_SEED,
  snapshotStore: SNAPSHOT_STORE_SEED,
  changeStore: CHANGE_STORE_SEED
}