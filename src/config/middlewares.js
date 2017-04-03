import { applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import freeze from 'redux-freeze';

//Param the middlewares depending of the enviroment
const DEFAULT_ENVIROMENT = 'development';
let enviroment = DEFAULT_ENVIROMENT;
if (process && process.env && process.env.REACT_APP_ENVIROMENT) {
  enviroment = process.env.REACT_APP_ENVIROMENT;
}

/*
 * Middleware with:
 * - Redux DevTools
 * - Redux Logger
 * - Redux Thunk
 ***/
function getMiddlewaresThunkFreezeLoggerReactDevTools() {
  const composeEnhancers = process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk, freeze, createLogger())
  );
  return enhancer;
}

/*
 * Middleware with:
 * - Redux Thunk
 ***/
function getMiddlewaresThunk() {
  return applyMiddleware(thunk);
}

/*
 * Returns the list of middlewares
 ***/
export default function getMiddlewares() {
  switch (enviroment) {
  case 'development':
    return getMiddlewaresThunkFreezeLoggerReactDevTools();
  default:
    return getMiddlewaresThunk();
  }
}
