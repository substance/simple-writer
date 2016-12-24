import { CollabServerPackage } from 'substance'

import SimpleWriterPackage from '../simple-writer/SimpleWriterPackage'

/*
  CollabServerPackage provides an in-memory backend for testing purposes.
  For real applications, please provide a custom package here, which configures
  a database backend.
*/
export default {
  name: 'simple-writer-server',
  configure: function (config) {
    config.import(CollabServerPackage)
    config.setHost(process.env.HOST || 'localhost')
    config.setPort(process.env.PORT || 7777)
  }
}