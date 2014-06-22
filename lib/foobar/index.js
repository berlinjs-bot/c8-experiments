var dom = require("dom");
var reactive = require("reactive");
var view = reactive('<p>Hello {name}!</p>', {
  name: 'BerinJS'
});

module.exports = function(parent) {
    dom(parent).append(view.el);
}
