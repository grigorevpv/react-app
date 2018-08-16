import {combineReducers} from 'redux';

import counterReducer from './counter';
import articleReducer from './article';
import filterReducer from './filter';
import commentReducer from './comment'

export default combineReducers({
    count: counterReducer,
    articles: articleReducer,
    filters: filterReducer,
    comments: commentReducer
})