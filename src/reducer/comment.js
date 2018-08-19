import { normalizedComments } from '../fixtures';
import accordion from '../decorators/accordion';

const commentMap = normalizedComments.reduce((acc, comment) => {
        acc[comment.id] = comment;
        return acc;
    }, {});

export default (comments = commentMap, action) => {
    const {type} = action
    switch (type) {
    }

    return comments
}