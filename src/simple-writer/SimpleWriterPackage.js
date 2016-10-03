// Base packages
import {
  BasePackage, StrongPackage, EmphasisPackage, LinkPackage, Document,
  ParagraphPackage, HeadingPackage
} from 'substance'

import BodyPackage from '../body/BodyPackage'
import CommentPackage from '../comment/CommentPackage'
import SimpleHTMLImporter from './SimpleHTMLImporter'

export default {
  name: 'simple-writer',
  configure: function (config) {
    config.defineSchema({
      name: 'simple-article',
      ArticleClass: Document,
      defaultTextType: 'paragraph'
    })

    // BasePackage provides core functionalities, such as undo/redo
    // and the SwitchTextTypeTool
    // However, you could import those functionalities individually too
    // if you need more control
    config.import(BasePackage)

    // core nodes
    config.import(ParagraphPackage)
    config.import(HeadingPackage)
    config.import(StrongPackage, {toolTarget: 'annotations'})
    config.import(EmphasisPackage, {toolTarget: 'annotations'})
    config.import(LinkPackage, {toolTarget: 'annotations'})
    config.import(CommentPackage, {toolTarget: 'annotations'})

    // custom nodes
    config.import(BodyPackage)

    // Override Importer/Exporter
    config.addImporter('html', SimpleHTMLImporter)
  }
}