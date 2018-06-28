import * as actions from '../constants/ActionTypes'

import { articles as articlesList } from '../fixtures';

export default function articlesState(state = articlesList, action) {
    switch(action.type) {
        case actions.ADD_FILTER:
            debugger;
            console.log('it is set filter action');
            return action.payload;
        default:
            return state;
    }
}