c8-experiments
==============

This repo shows how you can use [component](https://github.com/component/component) (1.0.0-rc5)

I showed these examples at my talk @ [Berlin.JS](http://berlinjs.org/)

Each example is on its own branch.
Starting with an empty project and do a progress step by step.

- e0 - almost empty project
- e1 - install component
- e2 - use a JS script
- e3 - use CSS
- e4 - use another JS file
- e5 - use 3rd party component
- e6 - add Font Awesome
- e7 - better directory structure
- e8 - add reactive component
- e9 - reactive with a list
- e10 - use jade for templating
- e11 - use express as middleware for generating the build

For `e1` you need to run `component install`
For `e1` until e9 just a `node_modules/.bin/component-build` or if you installed it globally
`component-build`
`e10` has it's own build script using component API, just run it with node: `node builder.js`
`e11` uses express to generate the build, start express with `node app.js`
