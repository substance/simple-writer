import { HTMLImporter } from 'substance'

/**
  HTML importer for the SimpleArticle. We delegate the work to
  BodyConverter.
*/
export default class SimpleHTMLImporter extends HTMLImporter {
  convertDocument(htmlEl) {
    var bodyEl = htmlEl.find('body')
    this.convertElement(bodyEl)
  }
}