let b = require('substance-bundler')
let path = require('path')

b.task('clean', function() {
  b.rm('./dist')
})

// copy assets
b.task('assets', function() {
  b.css('./app/app.css', './dist/app.css', { variables: true })
  b.copy('node_modules/font-awesome', './dist/font-awesome')
})

// this optional task makes it easier to work on Substance core
b.task('substance:css', function() {
  b.make('substance', 'css')
})

b.task('build-client', ['assets'], function() {
  b.copy('app/index.html', './dist/index.html')
  // NOTE: this creates an single-file bundle including the app
  // and the substance lib
  b.js('app/app.js', {
    target: {
      dest: './dist/app.js',
      format: 'umd',
      moduleName: 'app'
    },
    alias: {
      'substance': path.join(__dirname, 'node_modules/substance/index.es.js')
    },
    buble: true
  })
})

// build all
b.task('build', ['clean', 'substance:css', 'build-client'])

b.task('default', ['build'])

// starts a server when CLI argument '-s' is set
b.setServerPort(5555)
b.serve({
  static: true, route: '/', folder: 'dist'
})
