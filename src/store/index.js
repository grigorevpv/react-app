import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import loggerAction from '../middlewares'

const store = createStore(reducer, applyMiddleware(loggerAction));

//dev only
window.store = store

export default store