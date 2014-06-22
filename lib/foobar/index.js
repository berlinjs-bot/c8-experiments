var template = require("./templates/list");
var dom = require("dom");

module.exports = function(parent) {
    dom(parent).append(template);
}
