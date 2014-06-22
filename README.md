c8-experiments
==============

This repo shows how you can use [component](https://github.com/component/component) (1.0.0-rc5)

I showed these examples at my talk @ [Berlin.JS](http://berlinjs.org/)

Each example is on its own branch.
Starting with an empty project and do a progress step by step.

### examples

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

### install steps for each example

For `e0` you need to run `npm install`

Because component is installed locally, you cannot access it with `component-build`, but
you can create a temporary alias: `alias component-build='node_modules/.bin/component-build'` otherwise
install it with global option: `npm install component@1.0.0-rc5`

From `e1` until `e9` just a `component-build`

`e10` has it's own build script using component API, run it with node: `node builder.js`

`e11` uses express to generate the build, start express with `node app.js`

### clone and do step by step
1. clone this repo: `https://github.com/timaschew/c8-experiments.git`
2. change the directory `cd  c8-experiments`
3. get all branches: `./pull-branches.sh`
4. start with first example: `git checkout e0`
5. if you want to go to the next, run `git checkout e1` then `npm install`
6. next one: `git checkout e3` then `component-build`
7. etcetera
