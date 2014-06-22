var dialog = require("dialog");
var addList = require("foobar");

var client = {};
var title = 'Hello component!';

client.show = function() {
  addList(document.querySelector(".container"));
}

client.sum = function(a, b) {
  var helper = require("./helper")
  alert(helper.sum(a,b))
}

console.log("client was required");

module.exports = client
