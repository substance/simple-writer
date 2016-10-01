// Base packages
import {
  BasePackage, StrongPackage, EmphasisPackage, LinkPackage, Document,
  ParagraphPackage, HeadingPackage
} from 'substance'

import BodyPackage from '../body/BodyPackage'
import SimpleHTMLImporter from './SimpleHTMLImporter'

export default {
  name: 'simple-writer',
  configure: function (config) {
    config.defineSchema({
      name: 'simple-article',
      ArticleClass: Document,
      defaultTextType: 'paragraph'
    })

    // core nodes
    config.import(BasePackage)
    config.import(ParagraphPackage)
    config.import(HeadingPackage)
    config.import(StrongPackage, {toolTarget: 'annotations'})
    config.import(EmphasisPackage, {toolTarget: 'annotations'})
    config.import(LinkPackage, {toolTarget: 'annotations'})

    // custom nodes
    config.import(BodyPackage)

    // Override Importer/Exporter
    config.addImporter('html', SimpleHTMLImporter)
  }
}