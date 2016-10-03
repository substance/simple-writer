# SimpleWriter

SimpleWriter is the official Substance starter example. It sets up a minimal environment for Substance editor development. Fork this code and create your own editor.

## Install

```
$ git clone https://github.com/substance/examples.git
$ npm install
$ npm start
```

And navigate to `http://localhost:5555`.

## Getting started

You goal should be to read and understand all the code in this repository. And change it. You'll soon be ready to build your own completely custom web editor.

Here are some pointers on how SimpleWriter is structured:

- [`lib/simple-writer`](lib/simple-writer) - The editor, realized as a package
- [`lib/body`](lib/body) - Maps an HTML body element to a Substance container node in the editor
- [`lib/comment`](lib/comment) - A comment implementation that extends the base editor
- [`app`](app) - App that creates a SimpleWriter instance (contains index.html, app.js and app.css)

The following files play a crucial role in the SimpleWriter implementation:

- [`lib/simple-writer/SimpleWriterPackage`](lib/simple-writer/SimpleWriterPackage.js) - Provides a default configuration for SimpleWriter. We import core functionality from Substance such as the base package (undo,redo, text type switcher) and core node types paragraph, strong, emphasis. Keep in mind, that often it makes sense to implement them yourself, so you can control literally every aspect, such as rendering and tools.
- [`lib/simple-writer/SimpleWriter`](lib/simple-writer/SimpleWriter.js) - The editor, realized as a Substance Component. It sets up a toolbar and renders the Body component (editable area).
- [`lib/simple-writer/SimpleHTMLImporter`](lib/simple-writer/SimpleHTMLImporter.js) - An importer implementation ready to read your document, as HTML.
- [`lib/simple-writer/SimpleWriterOverlayTools`](lib/simple-writer/SimpleWriterOverlayTools.js) - Renders all tools that have `target: 'overlay'?`.
- [`lib/comment/EditCommentTool`](lib/comment/EditCommentTool.js) - Comment editor displayed as an overlay tool.

## Homework

- Enable a Substance core node type (e.g. Superscript, Image) for SimpleWriter (very easy)
- Create a simple Highlight node type to emphasize parts of the text with a yellow background. Serialize as `<span data-type="highlight">...</span>` Tip: Look at existing implementations such as Strong. (easy)
- Create a new text type FancyParagraph, that works like a regular paragraph, just with different styles. Serialize as `<p data-type="fancy">...</p>` (easy)
- Create a simple Person node type with properties `firstname`, `lastname`, which are editable via regular input elements. Look at [Input Example](https://github.com/substance/examples/blob/v1.0.0-beta.5/input) as a reference implementation. Create a tool that allows insertion of Person nodes into the document (as a block element). Serialize as `<div data-type="person" data-firstname="John" data-lastname="Doe"></div>`. (medium)
- Create new Monster node type that can be inserted inside the text. See [InlineNode example](https://github.com/substance/examples/blob/v1.0.0-beta.5/inline-node) as a reference implementation. Render a monster as small image that appears in the text. Bonus points: Allow different monster types and provide UI to change the moster type. Render a different image for each monster type. (medium)

When you've completed your homework, please submit an issue containing the URL to your source code. We are happy to link them as possible solutions for others to check.