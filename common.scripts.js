/**
 * Package.json script boilerplate one-liners for common tasks.
 * 
 * These are meant to be copy/pasted as a name: task into package.json
 * and then executed. If you arent sure what libraries are used in each
 * execution, run it and the error log will tell you what to install
 * for each one.
 */

const start = {
  // non webpack, minimal browserify copiler + watch
  start: 'watchify src/index.js -t [babelify] -o dist/bundle.js -v'
};

const tests = {
  // minimal tape unit test runner + faucet as reporter
  test: 'tape src/*.spec.js | faucet',
  // same as above but with babel enabled
  test: 'tape -r babel-register src/*.spec.js | faucet',
  // same as above, but with a mocha like reporter
  test: 'tape -r babel-register src/*.spec.js | tap-mocha-reporter'
};
