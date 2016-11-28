// NOTE: We must ensure there is no whitespace before or after the <html> element
// otherwise CheerioDOMElement will not recognize it as a single element, which will
// break the converter
export default `<html><body>
  <h1>SimpleWriter</h1>
  <p>
    This is the official
    <span data-type="comment" data-comment="A JavaScript library for web-based content editing">Substance</span>
    editor boilerplate example. Fork it, and create your own editor.
  </p>
  <p>You can find the source code on <a href="http://github.com/substance/starter">Github</a>.</p>
</body></html>`