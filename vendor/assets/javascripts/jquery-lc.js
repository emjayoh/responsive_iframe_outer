(function(define, require, requirejs) {
  require(['jquery'], function(jq) {
    define(['require', 'jquery'], function (require, jq) {
      console.log('in jquery-lc');
      return jq.noConflict( true );
    });
  });
}(lcRequireJS.define, lcRequireJS.require, lcRequireJS.requirejs));
