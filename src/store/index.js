import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import loggerAction from '../middlewares'
import idGenerator from '../middlewares/idGenerator';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(loggerAction, idGenerator));

//dev only
window.store = store

export default store