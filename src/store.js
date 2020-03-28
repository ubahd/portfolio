import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
// import rootReducer from './reducers/index';
import {state} from './reducers'
 
// Note: this API requires redux@>=3.1.0
const a = window

const composeEnhancers = a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
    applyMiddleware(thunk, logger)
 )

 export const store = createStore(
    state,
    enhancer
 )