var client = {};
var title = 'Hello component!';

client.show = function() {
  alert(title);
}

client.sum = function(a, b) {
  var helper = require("./helper")
  alert(helper.sum(a,b))
}

console.log("client was required");

module.exports = client
