var BOOKMARKLETS = [];

BOOKMARKLETS.push({
  label: 'archive.org',
  fun: function() {
    location.href = 'https://web.archive.org/web/*/' + location.href;
  }
});

BOOKMARKLETS.push({
  label: 'Readability.com',
  source: 'https://www.readability.com/bookmarklets',
  fun: function() {
    var baseUrl = '//www.readability.com';
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('charset', 'UTF-8');
    s.setAttribute('src', baseUrl + '/bookmarklet/read.js');
    document.documentElement.appendChild(s);
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

BOOKMARKLETS.map(function(bookmarklet) {
  var li = document.createElement('li');
  var a = document.createElement('a');
  a.href = encodeURI('javascript:(' + bookmarklet.fun + ')();');
  a.appendChild(document.createTextNode(bookmarklet.label));
  li.appendChild(a);
  document.getElementById('list').appendChild(li);
});
