require.config({
  // alias libraries paths
  paths: {
    'spin': '/bower_components/ladda/dist/spin.min',
    'ladda': '/bower_components/ladda/js/ladda',
    'angular': '/bower_components/angular/angular'
  },

  // angular does not support AMD out of the box, put it in a shim
  shim: {
    'angular': {
      exports: 'angular'
    },
    'spin': {
      exports: 'spin'
    },
    'ladda': {
      exports: 'ladda'
    }
  },

  // kick start application
  deps: ['./bootstrap']
});
