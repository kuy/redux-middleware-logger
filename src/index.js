export default function injectMiddlewareLogger(...middlewares) {
  function logger() {
    return next => action => {
      console.group(`action ${action.type}`);
      console.log('%c action', 'color: %03A9F4; font-weight: bold', action);
      console.groupEnd();
      return next(action);
    };
  }

  return middlewares.reduce((list, m) => list.concat([logger, m]), []).concat([logger]);
}
