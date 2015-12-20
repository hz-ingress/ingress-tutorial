  var getSelfURL = (function() {
      var scripts = document.getElementsByTagName('script');
      var index = scripts.length - 1;
      var myScript = scripts[index];
      return function() {
          return myScript.src;
      };
  })();

  function getScriptURL(script) {
      return getSelfURL().substring(0, getSelfURL().lastIndexOf("/") + 1) + script;
  }

  function load(script) {
      newScript = document.createElement('script');
      newScript.type = 'text/javascript';
      newScript.src = script;
      document.getElementsByTagName('head')[0].appendChild(newScript);
  }

  function onReady(fn) {
      if (document.readyState != 'loading') {
          fn();
      } else {
          document.addEventListener('DOMContentLoaded', fn);
      }
  }

  /** fix space between CJK & Latin characters automatically */
  var fix_space = function() {
      if (typeof pangu == "undefined") {
          setTimeout(fix_space, 300);
      } else {
          pangu.page_spacing();
      };
  };
  var pangu_path = pangu_path || getScriptURL('pangu.js');
  load(pangu_path);
  // fix space on page load
  onReady(fix_space);
  // check page change event
  var watched_last_href = watched_last_href || window.location.href;
  setInterval(function() {
      if (watched_last_href != window.location.href) {
          watched_last_href = window.location.href;
          fix_space();
      }
  }, 100);
  
  /** make html lang attribute Chinese */
  document.getElementsByTagName('html')[0].lang='zh-CN';
