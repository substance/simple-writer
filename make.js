var b = require('substance-bundler');

b.task('clean', function() {
  b.rm('./dist')
})

// copy assets
b.task('assets', function() {
  b.css('./app/app.css', 'dist/app.css', { variables: true })
  b.copy('node_modules/font-awesome', './dist/font-awesome')
})

// this optional task makes it easier to work on Substance core
b.task('substance', function() {
  b.make('substance', 'clean', 'browser', 'server')
})

b.task('build-client', ['substance', 'clean', 'assets'], function() {
  // Copy Substance
  b.copy('node_modules/substance/dist', './dist/substance')
  b.copy('app/index.html', './dist/index.html')
  b.js('app/app.js', {
    external: ['substance'],
    commonjs: { include: ['node_modules/lodash/**'] },
    dest: './dist/app.js',
    format: 'umd',
    moduleName: 'app'
  })
})

b.task('build-server', function() {
  // Copy Substance
  b.js('server.js', {
    external: ['substance', 'express', 'ws', 'path', 'http'],
    // commonjs: { include: ['node_modules/lodash/**'] },
    dest: './server.cjs.js',
    format: 'cjs',
    moduleName: 'simple-writer'
  })
})

// build all
b.task('default', ['build-client', 'build-server'])

// starts a server when CLI argument '-s' is set
b.setServerPort(5555)
b.serve({
  static: true, route: '/', folder: 'dist'
})
