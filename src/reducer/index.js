import {combineReducers} from 'redux';

import counterReducer from './counter';
import articleReducer from './article';
import filterReducer from './filter';

export default combineReducers({
    count: counterReducer,
    articles: articleReducer,
    filters: filterReducer
})