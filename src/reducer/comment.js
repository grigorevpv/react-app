import { normalizedComments } from '../fixtures';
import accordion from '../decorators/accordion';
import { ADD_COMMENT } from '../constants';

const commentMap = normalizedComments.reduce((acc, comment) => {
        acc[comment.id] = comment;
        return acc;
    }, {});

export default (comments = commentMap, action) => {
    const {type, payload} = action;

    switch (type) {
        case ADD_COMMENT:
            debugger;
            const {id, text, user} = payload.comment;
            return {...comments, [id]: {id, text, user} }
    }

    return comments
}