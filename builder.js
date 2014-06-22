var fs = require('fs');
var build = require('component-builder');
var resolve = require('component-resolver');
var jade = require('builder-jade');

resolve(process.cwd(), {
  install: true
}, function (err, tree) {
  if (err) throw err;

  build.scripts(tree, {development: true})
    .use('scripts', build.plugins.js())
    .use('templates', build.plugins.string())
    .use('jade', jade({
      string: false,
      runtime: true,
    }))
    .build(function (err, string) {
      if (err) throw err;
      string = build.scripts.require + string;
      string = jade.runtime + string;
      fs.writeFileSync('build/build.js', string);
    });

    //TODO: add css build and files (images, fonts, ...)
});
