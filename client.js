var client = {};
var title = 'Hello component!';

client.show = function() {
  alert(title);
}

console.log("client was required");

module.exports = client
