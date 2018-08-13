import {combineReducers} from 'redux';

import counterReducer from './counter';
import articleReducer from './article';

export default combineReducers({
    count: counterReducer,
    articles: articleReducer,
})