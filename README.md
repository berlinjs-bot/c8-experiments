c8-experiments
==============

This repo shows how you can use [component](https://github.com/component/component) (1.0.0-rc5)

I showed these examples at my talk @ [Berlin.JS (2014-06-19)](http://berlinjs.org/)

Each example is on its own branch.
Starting with an empty project and do a progress step by step.

### clone and do step by step
1. clone this repo: `https://github.com/timaschew/c8-experiments.git`
2. change the directory `cd c8-experiments`
3. start with first example: `git checkout e1` then `npm install`
5. next one: `git checkout e2` then `component-build`
6. etcetera

### examples

- [e1](https://github.com/timaschew/c8-experiments/tree/e1) - install component
- [e2](https://github.com/timaschew/c8-experiments/tree/e2) - use a JS script
- [e3](https://github.com/timaschew/c8-experiments/tree/e3) - use CSS
- [e4](https://github.com/timaschew/c8-experiments/tree/e4) - use another JS file
- [e5](https://github.com/timaschew/c8-experiments/tree/e5) - use 3rd party component
- [e6](https://github.com/timaschew/c8-experiments/tree/e6) - add Font Awesome
- [e7](https://github.com/timaschew/c8-experiments/tree/e7) - better directory structure & local component
- [e7a](https://github.com/timaschew/c8-experiments/tree/e7a) - test environment (`component buiild --dev`)
- [e8](https://github.com/timaschew/c8-experiments/tree/e8) - add reactive component
- [e9](https://github.com/timaschew/c8-experiments/tree/e9) - reactive with a list
- [e10](https://github.com/timaschew/c8-experiments/tree/e10) - use jade for templating (*)
- [e11](https://github.com/timaschew/c8-experiments/tree/e11) - use express as middleware for generating the build (*)

### install steps for each example

Youn only need to run `npm install` once (except for `e11` and `e11`)

Because component is installed locally, you cannot access it with `component-build`, but
you can create a temporary alias: `alias component-build='node_modules/.bin/component-build'` otherwise
install it with global option: `npm install component@1.0.0-rc5`

From `e1` until `e9` just a `component-build`

`e10` has it's own build script using component API, first install `npm install` then run  `node builder.js`

`e11` uses express to generate the build, install `npm install` and start express `node app.js`
