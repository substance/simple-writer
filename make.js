var b = require('substance-bundler');
var resolve = require('rollup-plugin-node-resolve')

b.task('clean', function() {
  b.rm('./dist')
})

// copy assets
b.task('assets', function() {
  b.css('./app/app.css', './dist/app.css', { variables: true })
  b.copy('node_modules/font-awesome', './dist/font-awesome')
})

// this optional task makes it easier to work on Substance core
b.task('substance', function() {
  b.make('substance')
})

b.task('build-client', ['assets'], function() {
  // Copy Substance
  b.copy('node_modules/substance/dist', './dist/substance')
  b.copy('app/index.html', './dist/index.html')

  // NOTE: this creates an single-file bundle including the app
  // and the substance lib
  b.js('app/app.js', {
    plugins: [
      resolve({
        // consider the browser field in `package.json`
        browser: true,
        // use es6 entry points
        jsnext: true,
        module: true
      }),
    ],
    dest: './dist/app.js',
    format: 'umd',
    moduleName: 'app'
  })
})

// build all
b.task('build', ['clean', 'substance', 'build-client'])

b.task('default', ['build'])

// starts a server when CLI argument '-s' is set
b.setServerPort(5555)
b.serve({
  static: true, route: '/', folder: 'dist'
})
