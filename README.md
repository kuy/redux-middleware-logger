# redux-middleware-logger

Logger for Redux's middleware.
This can be used to debug your middleware.

## Install
`npm install redux-middleware-logger --save`

## Usage

The default export is a function that inserts middleware functions for logging.

```javascript
import injectMiddlewareLogger from 'redux-middleware-logger';

const middlewares = injectMiddlewareLogger(m1, m2);
const createStoreWithMiddleware = applyMiddleware(...middlewares);
const store = createStoreWithMiddleware(reducer);
```

Or

```javascript
import withLogger from 'redux-middleware-logger';

const store = applyMiddleware(...withLogger(m1, m2))(createStore)(reducer);
```

NOTE: `injectMiddlewareLogger` and `withLogger` are same function.

## License

MIT
