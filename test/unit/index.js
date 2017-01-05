// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind');

// require all test files (files that ends with .test.js)
const testsContext = require.context('./', true, /\.test/);
testsContext.keys().forEach(testsContext);


const srcContext = require.context('src', true);
srcContext.keys().forEach(srcContext);
