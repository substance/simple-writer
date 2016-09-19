var b = require('substance-bundler');

b.task('clean', function() {
  b.rm('./dist')
})

// copy assets
b.task('assets', function() {
  b.copy('packages/**/*.css', './dist/')
  b.copy('node_modules/font-awesome', './dist/font-awesome')
})

// this optional task makes it easier to work on Substance core
b.task('substance', function() {
  b.make('substance', 'clean', 'css', 'browser:umd')
  b.copy('node_modules/substance/dist', './dist/substance')
})

b.task('build', ['clean', 'substance', 'assets'], function() {
  b.copy('index.html', './dist/index.html')
  b.copy('*.css', './dist/')
  b.js('app.js', {
    external: ['substance'],
    commonjs: { include: ['node_modules/lodash/**'] },
    dest: './dist/app.js',
    format: 'umd',
    moduleName: 'app'
  })
})

// build all
b.task('default', ['build'])

// starts a server when CLI argument '-s' is set
b.setServerPort(5555)
b.serve({
  static: true, route: '/', folder: 'dist'
})
