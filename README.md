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

You goal should be to read and understand all the code in this repository. You are then ready to build your own editor.

Here are some pointers on how SimpleWriter is structured.

- `app` - contains index.html, app.js and app.css (the app)
- `lib/simple-writer` - the editor, realized as a package
- `lib/body` - maps an HTML body element to a Substance container node in the editor
- `lib/comment` - a comment implementation that extends the base editor

The following files should be of your interest.

- `lib/simple-writer/SimpleWriterPackage` - Provides a default configuration for SimpleWriter. We import core functionality from Substance such as the base package (undo,redo, text type switcher) and core node types paragraph, strong, emphasis. Keep in mind, that often it makes sense to implement them yourself, so you can control literally every aspect, such as rendering and tools.
- `lib/simple-writer/SimpleWriter` - The editor, realized as a Substance Component. It sets up a toolbar and editable area.
- `lib/simple-writer/SimpleHTMLImporter` - An importer implementation ready to read your document, as HTML.
- `lib/simple-writer/SimpleWriterOverlayTools` - Renders all tools that have target: 'overlay'. You have full control over the markup and styles here