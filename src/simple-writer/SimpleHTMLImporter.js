import { HTMLImporter } from 'substance'

export default class SimpleHTMLImporter extends HTMLImporter {
  convertDocument(htmlEl) {
    var bodyEl = htmlEl.find('body')
    this.convertElement(bodyEl)
  }
}