[![npm package](https://img.shields.io/npm/v/redux-middleware-logger.svg?style=flat-square)](https://www.npmjs.org/package/redux-middleware-logger)

# redux-middleware-logger

Logger for Redux's middleware.
This can be used to debug your middleware.

### Install
`npm install redux-middleware-logger --save`

### Usage

The default export is a function that inserts middleware functions for logging.

```js
import injectMiddlewareLogger from 'redux-middleware-logger';

const middlewares = injectMiddlewareLogger(m1, m2);
const createStoreWithMiddleware = applyMiddleware(...middlewares);
const store = createStoreWithMiddleware(reducer);
```

or

```js
import withLogger from 'redux-middleware-logger';

const store = applyMiddleware(...withLogger(m1, m2))(createStore)(reducer);
```

*Note: `injectMiddlewareLogger` and `withLogger` are same function.*

### License

MIT
