(function (require, define) {
  console.log(define);
  define(['jquery'], function (jq) {
    console.log(jq);
    return jq.noConflict( true );
  });
}(myGlobalRequire[0], myGlobalRequire[1]));

