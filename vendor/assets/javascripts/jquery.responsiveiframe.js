(function(define, require, requirejs) {
  define(['jquery'], function(jQuery) { console.log('in define responsiveIframe'); "undefined"!=typeof jQuery&&!function(a){var b={xdomain:"*",ie:navigator.userAgent.toLowerCase().indexOf("msie")>-1,scrollToTop:!0},c={init:function(){return this.each(function(){var c=a(this);window.postMessage?window.addEventListener?window.addEventListener("message",function(a){d.messageHandler(c,a)},!1):window.attachEvent&&window.attachEvent("onmessage",function(a){d.messageHandler(c,a)},c):setInterval(function(){var a=window.location.hash,e=a.match(/^#h(\d+)(s?)$/);e&&(d.setHeight(c,e[1]),b.scrollToTop&&"s"===e[2]&&scroll(0,0))},150)})}},d={messageHandler:function(a,c){var e,f,g,h;if("*"!==b.xdomain){var i=new RegExp(b.xdomain+"$");if("null"==c.origin)throw new Error("messageHandler( elem, e): There is no origin.  You are viewing the page from your file system.  Please run through a web server.");if(!c.origin.match(i))throw new Error("messageHandler( elem, e): The orgin doesn't match the responsiveiframe  xdomain.");g=!0}if(("*"===b.xdomain||g)&&(h=c.data+"",f=h.match(/^(\d+)(s?)$/),f&&3===f.length)){if(e=parseInt(f[1],10),!isNaN(e))try{d.setHeight(a,e)}catch(j){}b.scrollToTop&&"s"===f[2]&&scroll(0,0)}},setHeight:function(a,b){a.css("height",b+"px")},getDocHeight:function(){var a=document;return Math.min(Math.max(a.body.scrollHeight,a.documentElement.scrollHeight),Math.max(a.body.offsetHeight,a.documentElement.offsetHeight),Math.max(a.body.clientHeight,a.documentElement.clientHeight))}};a.fn.responsiveIframe=function(d){return c[d]?c[d].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof d&&d?(a.error("Method "+d+" does not exist on jQuery.responsiveIframe"),void 0):(a.extend(b,arguments[0]),c.init.apply(this))}}(jQuery),function(){function a(){return new d}var b,c,d=function(){b=this};d.prototype.allowResponsiveEmbedding=function(){window.addEventListener?(window.addEventListener("load",b.messageParent,!1),window.addEventListener("resize",b.messageParent,!1)):window.attachEvent&&(window.attachEvent("onload",b.messageParent),window.attachEvent("onresize",b.messageParent))},d.prototype.messageParent=function(a){var b=document.body.offsetHeight;b=a?b+"s":b,top.postMessage?top.postMessage(b,"*"):window.location.hash="h"+b},"undefined"==typeof exports?window.responsiveIframe=a:c.exports.responsiveIframe=a}(); });
}(lcRequireJS.define, lcRequireJS.require, lcRequireJS.requirejs));