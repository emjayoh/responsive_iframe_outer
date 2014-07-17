require.config({
  baseUrl: 'http://localhost:4000/assets',
  paths: {
    jquery: 'jquery-1.11.1.min',
    responsiveIframe: 'jquery.responsiveiframe'
  },
  map: {
    '*': {'jquery': 'jquery-lc'},
    'jquery-lc': {'jquery': 'jquery'}
  }
});

require(['jquery','responsiveIframe'], function($) {
  $('#responsive-frame').responsiveIframe({xdomain: '*'});
});
