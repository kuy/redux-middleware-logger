'use strict';

exports.__esModule = true;
exports['default'] = injectMiddlewareLogger;

function injectMiddlewareLogger() {
  function logger() {
    return function (next) {
      return function (action) {
        console.group('action ' + action.type);
        console.log('%c action', 'color: %03A9F4; font-weight: bold', action);
        console.groupEnd();
        return next(action);
      };
    };
  }

  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return middlewares.reduce(function (list, m) {
    return list.concat([logger, m]);
  }, []).concat([logger]);
}

module.exports = exports['default'];