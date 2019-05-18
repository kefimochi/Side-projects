"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Stateless functional component
// Returns JSX
function App(props) {
  var facts = props.facts.map(function (fact, i) {
    return _react2.default.createElement(
      "li",
      { key: i },
      " ",
      fact.text,
      " "
    );
  });
  return _react2.default.createElement(
    "ul",
    null,
    facts
  );
}

exports.default = App;