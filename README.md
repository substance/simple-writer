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

You goal should be to read and understand all the code in this repository. And change it and see what happens. You are then ready to build your own editor.

Here are some pointers on how SimpleWriter is structured.

- `[app](./app)` - contains index.html, app.js and app.css (the app)
- `lib/simple-writer` - the editor, realized as a package
- `lib/body` - maps an HTML body element to a Substance container node in the editor
- `lib/comment` - a comment implementation that extends the base editor

The following files should be of your interest.

- `lib/simple-writer/SimpleWriterPackage` - Provides a default configuration for SimpleWriter. We import core functionality from Substance such as the base package (undo,redo, text type switcher) and core node types paragraph, strong, emphasis. Keep in mind, that often it makes sense to implement them yourself, so you can control literally every aspect, such as rendering and tools.
- `lib/simple-writer/SimpleWriter` - The editor, realized as a Substance Component. It sets up a toolbar and editable area.
- `lib/simple-writer/SimpleHTMLImporter` - An importer implementation ready to read your document, as HTML.
- `lib/simple-writer/SimpleWriterOverlayTools` - Renders all tools that have target: 'overlay'. You have full control over the markup and styles here

## Homework

- Enable a Substance core node type (e.g. Superscript, Image) for SimpleWriter (very easy)
- Create a simple Highlight node type to emphasize parts of the text with a yellow background. Serialize as `<span data-type="highlight">...</span>` Tip: Look at existing implementations such as Strong. (easy)
- Create a new text type FancyParagraph, that works like a regular paragraph, just with different styles. Serialize as `<p data-type="fancy">...</p>` (easy)
- Create a simple Person node type with properties `firstname`, `lastname`, which are editable via regular input elements. Look at [Input Example](https://github.com/substance/examples/blob/v1.0.0-beta.4/input/app.js) as a reference implementation. Create a tool that allows insertion of Person nodes into the document (as a block element). Serialize as `<div data-type="person" data-firstname="John" data-lastname="Doe"></div>`. (medium)
- Create new Alien node type that can be inserted inside the text

When you've completed your homework, please submit an issue containing the URL to your solution. We are happy to link them as possible solutions for others to check.