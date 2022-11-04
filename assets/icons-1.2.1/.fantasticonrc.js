module.exports = {
  inputDir: './icons', // (required)
  outputDir: './font', // (required)
  fontTypes: ['woff', 'woff2'],
  assetTypes: ['css', 'json', 'html'],
  name: 'bootstrap-icons',
  prefix: 'bi',
  selector: '.bi',
  fontsUrl: './fonts',
  formatOptions: {
    json: {
      // render the JSON human readable with two spaces indent (default is none, so minified)
      indent: 2
    }
  },
  // Use a custom Handlebars template
  templates: {
    css: './src/css.hbs',
    html: './src/html.hbs'
  },
  pathOptions: {
    json: './font/bootstrap-icons.json',
    css: './font/bootstrap-icons.css',
    html: './font/index.html',
    ttf: './font/fonts/bootstrap-icons.ttf',
    woff: './font/fonts/bootstrap-icons.woff',
    woff2: './font/fonts/bootstrap-icons.woff2',
    eot: './font/fonts/bootstrap-icons.eot'
  }
};
