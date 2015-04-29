//(function(){
  var getSelfURL = (function() {
    var scripts = document.getElementsByTagName('script');
    var index = scripts.length - 1;
    var myScript = scripts[index];
    return function() { return myScript.src; };
  })();

  function getScriptURL(script) {
    return getSelfURL().substring(0, getSelfURL().lastIndexOf("/") + 1) + script;
  }

  function load(script) {
    newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = script;
    document.getElementsByTagName('head')[0].appendChild(newScript);
    // var request = new XMLHttpRequest();
    // request.open('GET', script, true);
    //
    // request.onload = function() {
    //   if (this.status >= 200 && this.status < 400) {
    //     // Success!
    //     eval(this.response);
    //   } else {
    //     // We reached our target server, but it returned an error
    //   }
// };
//
// request.onerror = function() {
//   // There was a connection error of some sort
// };
//
// request.send();
  }

  function onReady(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  // fix space between CJK & Latin characters automatically

  var fix_space = function(){
    if (typeof pangu == "undefined") {
      setTimeout(fix_space, 300);
    } else {
      pangu.page_spacing();
    };
  };
  var pangu_path = pangu_path || getScriptURL('pangu.js');
  load(pangu_path);
  onReady(fix_space);
//})();
