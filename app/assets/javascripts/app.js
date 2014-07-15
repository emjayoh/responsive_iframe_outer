require.config({
  baseUrl: 'http://localhost:4000/assets',
  paths: {
    'jquery': 'jquery-1.11.1.min',
    'responsiveIframe': 'jquery.responsiveiframe'
  },
  map: {
    '*': {'jquery': 'jquery-lc'},
    'jquery-lc': {'jquery': 'jquery'}
  }
//  ,
//  shim: {
//    responsiveIframe: {
//      init: function() {
//        return this.responsiveIframe
//      }
//    }
//  }
//  ,
//  shim: {
//    'responsiveIframe': ['jquery']
//  }
//  ,
//  shim: {
//    'responsiveIframe': {
//      'deps': 'jquery',
//      'exports': 'ResponsiveIframe'
//      'init': function() {
//        return this.responsiveIframe.noConflict()
//    }
//  }
});

require(['jquery', 'responsiveIframe'], function($) {
  $('#responsive-frame').responsiveIframe({
    xdomain: '*'
  });
});

//
//
//console.log('page: ', $.fn.jquery);

//require.onError = function (err) {
//  /*
//   err has the same info as the errback callback:
//   err.requireType & err.requireModules
//   */
//  console.log(err.requireType);
//  // Be sure to rethrow if you don't want to
//  // blindly swallow exceptions here!!!
//};
