import { HTMLImporter } from 'substance'
import isArray from 'lodash/isArray'
import find from 'lodash/find'

class HTMLArticleImporter extends HTMLImporter {
  convertDocument(htmlEl) {
    var bodyEl = htmlEl.find('body')
    this.convertElement(bodyEl);
  }
}

export default NewsMLImporter