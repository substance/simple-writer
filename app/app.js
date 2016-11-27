import {
  Configurator, CollabClient, WebSocketConnection,
  JSONConverter, DocumentClient, CollabSession
} from 'substance'
import SimpleWriter from '../lib/simple-writer/SimpleWriter'
import SimpleWriterPackage from '../lib/simple-writer/SimpleWriterPackage'

/*
  Configuration
*/
const EXAMPLE_DOCUMENT_ID = 'example-doc'
const DOCUMENT_SERVER_URL = '/api/documents'
const WEBSOCKET_URL = 'ws://localhost:5555'

/*
  Used to convert a document snapshot (JSON) into a real document instance
*/
let jsonConverter = new JSONConverter()

/*
  Collab engine endpoint
*/
let websocketConnection = new WebSocketConnection({
  wsUrl: WEBSOCKET_URL
})

/*
  CollabClient abstraction using a websocketConnection
*/
let collabClient = new CollabClient({
  connection: websocketConnection
})

/*
  Used to load a snapshot (e.g. latest version) from the server
*/
let documentClient = new DocumentClient({
  httpUrl: DOCUMENT_SERVER_URL
})

/*
  SimpleWriter configuration
*/
let cfg = new Configurator()
cfg.import(SimpleWriterPackage)

window.onload = function() {
  documentClient.getDocument(EXAMPLE_DOCUMENT_ID, function(err, docRecord) {
    if (err) throw new Error(err)

    let doc = jsonConverter.importDocument(docRecord.data)
    let collabSession = new CollabSession(doc, {
      documentId: EXAMPLE_DOCUMENT_ID,
      version: docRecord.version,
      collabClient: collabClient
    })

    // Mount SimpleWriter to the DOM and run it.
    SimpleWriter.mount({
      editorSession: collabSession
    }, document.body)
  })
}
