'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _static = require('inline-style-prefixer/static');

var _static2 = _interopRequireDefault(_static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var delay = _ref.delay,
      duration = _ref.duration,
      fillMode = _ref.fillMode,
      iterationCount = _ref.iterationCount,
      name = _ref.name,
      timingFunction = _ref.timingFunction;

  if (name) {
    /* eslint-disable no-param-reassign */

    /*
    *  don't apply defaults unless we have a name declaration
    *  otherwise, assume we're using this to override properties
    */

    duration = duration || '1.2s';
    iterationCount = iterationCount || 'infinite';
    timingFunction = timingFunction || 'ease-in-out';

    /* eslint-enable no-param-reassign */
  }

  var base = {
    animationDelay: delay,
    animationDuration: duration,
    animationFillMode: fillMode,
    animationIterationCount: iterationCount,
    animationTimingFunction: timingFunction,
    animationName: name
  };

  return Object.keys(base).reduce(function (accumulator, key) {
    if (base[key]) {
      accumulator[key] = base[key];
    }
    return accumulator;
  }, {});
};