var templateFn = function() {return ""};
var dom = require("dom");
var reactive = require("reactive");

var model = {
  meetups: ['Berlin.JS', 'NodeJS', 'up.front']
};

var template = templateFn({jade_local: 'quxfox'});
var view = reactive(template, model);

module.exports.model = model;

module.exports.init = function(parent) {
    dom(parent).append(view.el);
}
