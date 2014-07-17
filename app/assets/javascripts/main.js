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
  $lcw = $('.lc-widget');
  $lcw.append($('<iframe/>', {
    id: 'responsive-frame',
    src: '//' + $lcw.data('domain') + '/' + $lcw.data('uri') + '?css_path=' + encodeURIComponent($lcw.data('css-path')),
    scrolling: 'no',
    frameborder: 0,
    style: 'display: block; overflow: hidden; width: 100%; height: 0; border: 3px solid #444;'
  }));
  $('#responsive-frame').responsiveIframe({xdomain: '*'});
});
