'use strict';

module.exports = {

  build: {
    less: {
      enabled: false
    },
    bless: {
      enabled: false
    },
    spec: {
      runInPrepare: false
    },
    e2e: {
      runInDev: false,
      runInDist: false
    }
  },

  app: {
    files: {
      templates2js: [ ],
      translations: [ ],
      translations2js: [ ]
    }
  },

  vendor: {
    files: {
      js: [
        'angular/angular.js',

        'google-code-prettify/src/prettify.js',
        'w11k-slides/dist/w11k-slides.js',

        'w11k-flash/dist/js/w11k-flash.js',
        'w11k-flash/dist/js/w11k-flash.tpl.js',
        'swfobject/swfobject/swfobject.js'
      ],
      js_mock: [
      ],
      js_spec: [
      ],
      js_e2e: [
      ],
      css: [
      ],
      assets: [
        'font-awesome/fonts/*.*'
      ]
    }
  }
};
