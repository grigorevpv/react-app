import * as types from '../constants/ActionTypes';

export function setFilter(payload) {
    return {
        type: types.ADD_FILTER,
        payload: payload
    }
}