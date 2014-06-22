  var app, PORT, buildPath, resolve, root, serveComponent, serveStatic;

  app = require('express')()
  serveComponent = require('component-middleware');
  serveStatic = require('serve-static');
  resolve = require('path').resolve;

  root = __dirname;

  app.use(serveStatic(root));

  app.use(serveComponent({
    root: root,
    path: '/build',
    out: resolve(root, 'components'),
    development: true,
    component: {
      name: 'app',
      paths: ['lib'],
      locals: ['my-component']
    }
  }));

  app.use(serveStatic(resolve(root, 'components')));
  PORT = 3001;
  app.listen(PORT);

  console.log("open http://localhost:" + PORT);
