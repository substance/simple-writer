import {
  DocumentEngine, DocumentStore, ChangeStore, DocumentServer,
  CollabServer, Configurator, JSONConverter, SnapshotStore,
  documentHelpers
} from 'substance'
import express from 'express'
import path from 'path'
import http from 'http'
import { Server as WebSocketServer } from 'ws'
import SimpleWriterPackage from './lib/simple-writer/SimpleWriterPackage'
import htmlFixture from './app/fixture'

const HOST = 'localhost'
const PORT = 7777

let app = express()

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

/*
  Setup stores

  These are only in-memory stores. In your real app you need to implement a DocumentStore and ChangeStore
  for your database of choice
*/
let documentStore = new DocumentStore().seed(DOCUMENT_STORE_SEED)
let changeStore = new ChangeStore().seed(CHANGE_STORE_SEED)
let snapshotStore = new SnapshotStore().seed(SNAPSHOT_STORE_SEED)

/*
  DocumentEngine operates on document store and change store
*/
let documentEngine = new DocumentEngine({
  configurator: configurator,
  documentStore: documentStore,
  changeStore: changeStore,
  snapshotStore: snapshotStore,
  schemas: {
    'simple-article': {
      name: 'simple-article',
      // We don't need a documentFactory here as we don't create docs in this example
      // documentFactory: ...
    }
  }
})

/*
  Create HTTP and Websocket Server
*/
var httpServer = http.createServer();
var wss = new WebSocketServer({ server: httpServer })

/*
  DocumentServer provides an HTTP API to access snapshots
*/
var documentServer = new DocumentServer({
  documentEngine: documentEngine,
  path: '/api/documents'
})
documentServer.bind(app)

/*
  CollabServer implements the server part of the collab protocol
*/
var collabServer = new CollabServer({
  // every 30s a heart beat message is sent to keep
  // websocket connects alive when they are inactive
  heartbeat: 30*1000,
  documentEngine: documentEngine,

  /*
    A hook to implement authentication
  */
  authenticate: function(req, cb) {
    cb(null)
  },

  /*
    The request object can be enhanced with custom data.
  */
  enhanceRequest: function(req, cb) {
    cb(null)
  }
})

collabServer.bind(wss)


/*
  Serve static files (e.g. the SimpleWriter client)
*/
app.use('/', express.static(path.join(__dirname, '/dist')))

/*
  Error handling

  We send JSON to the client so they can display messages in the UI.
*/
app.use(function(err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }

  if (err.inspect) {
    // This is a SubstanceError where we have detailed info
    console.error(err.inspect())
  } else {
    // For all other errors, let's just print the stack trace
    console.error(err.stack)
  }

  res.status(500).json({
    errorName: err.name,
    errorMessage: err.message || err.name
  })
})

// Delegate http requests to express app
httpServer.on('request', app);

// NOTE: binding to localhost means that the app is not exposed
// to the www directly.
// E.g. on sandbox.substance.io we have established a reverse proxy
// forwarding http+ws on notepad.substance.io to localhost:5001
httpServer.listen(PORT, HOST, function() {
  console.info('Listening on http://' + HOST + ':' + httpServer.address().port);
})
