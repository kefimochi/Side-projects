"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFacts;

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns a promise of a response from React Documentation
// Can later call response.JSON to get the actual data
function getFacts() {
  return (0, _isomorphicFetch2.default)("https://ssr-react.firebaseio.com/facts.json").then(function (res) {
    return res.json();
  });
}