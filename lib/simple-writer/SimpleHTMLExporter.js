import { HTMLExporter } from 'substance'

class SimpleHTMLExporter extends HTMLExporter {

  convertDocument(doc, htmlEl) {
    let body = doc.get('body')
    let elements = this.convertContainer(body)
    htmlEl.append(elements)
    return htmlEl.outerHTML
  }
}

export default SimpleHTMLExporter
