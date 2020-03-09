
var page = require('webpage').create();
page.open('http://localhost:5000/', function() {
  page.render('!canvasimagepha.png');
  phantom.exit();
});