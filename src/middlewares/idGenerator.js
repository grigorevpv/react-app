import {ADD_COMMENT} from '../constants';

export default store => next => action => {
  if (action.type === ADD_COMMENT) {
    const id = Math.random().toString(36).substring(7);
    action.payload.comment.id = id;
    debugger;
    next(action);
  }

  next(action);
}