module.exports = {
  staticFileGlobs: [
    'index.html',
    'assets/images/**.*'
  ],
  runtimeCaching: [{
    urlPattern: /this\\.is\\.a\\.regex/,
    handler: 'networkFirst'
  }],
  swFile: 'sw-generated.js'
};
