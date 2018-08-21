var BOOKMARKLETS = [];

BOOKMARKLETS.push({
  label: 'archive.org',
  fun: function() {
    location.href = 'https://web.archive.org/web/*/' + location.href;
  }
});

BOOKMARKLETS.push({
  label: 'ng-stats',
  source: 'https://github.com/kentcdodds/ng-stats',
  fun: function() {
    var a = document.createElement("script");
    a.src = "https://rawgit.com/kentcdodds/ng-stats/master/dist/ng-stats.js";
    a.onload=function(){window.showAngularStats()};
    document.head.appendChild(a)
  }
});

BOOKMARKLETS.push({
  label: 'Wappalyzer',
  source: 'https://wappalyzer.com/download',
  fun: function() {
    var d = document,
    e = d.getElementById('wappalyzer-container');
    if (e !== null) {
      d.body.removeChild(e);
    }
    var u = 'https://wappalyzer.com/bookmarklet/',
    t = new Date().getTime(),
    c = d.createElement('div'),
    p = d.createElement('div'),
    l = d.createElement('link'),
    s = d.createElement('script');
    c.setAttribute('id', 'wappalyzer-container');
    l.setAttribute('rel', 'stylesheet');
    l.setAttribute('href', u + 'css/wappalyzer.css');
    d.head.appendChild(l);
    p.setAttribute('id', 'wappalyzer-pending');
    p.setAttribute('style', 'background-image: url(' + u + 'images/pending.gif) !important');
    c.appendChild(p);
    s.setAttribute('src', u + 'js/wappalyzer.js?' + t);
    s.onload = function() {
      s = d.createElement('script');
      s.setAttribute('src', u + 'js/apps.js?' + t);
      s.onload = function() {
        s = d.createElement('script');
        s.setAttribute('src', u + 'js/driver.js?' + t);
        c.appendChild(s);
      };
      c.appendChild(s);
    };
    c.appendChild(s);
    d.body.appendChild(c);
  }
});

BOOKMARKLETS.map(function(bookmarklet) {
  var li = document.createElement('li');
  var a = document.createElement('a');
  a.href = encodeURI('javascript:(' + bookmarklet.fun + ')();');
  a.appendChild(document.createTextNode(bookmarklet.label));
  li.appendChild(a);
  document.getElementById('list').appendChild(li);
});
