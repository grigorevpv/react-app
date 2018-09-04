import { DELETE_ARTICLE, ADD_COMMENT } from '../constants';

import { normalizedArticles } from '../fixtures';

const articleMap = normalizedArticles.reduce((acc, article) => {
    acc[article.id] = article;
    return acc;
}, {})

export default (state = articleMap, action) => {
    const {type, payload} = action;
    console.log(Object.keys(state).length)

    switch(type) {
        case DELETE_ARTICLE:
            let artState = {...state};
            let artId = payload.id;
            delete artState[artId];
            return artState;
        case ADD_COMMENT:
            const {articleId, id} = payload.comment;
            debugger;
            let data = {...state, [articleId]: {...state[articleId], comments: [...state[articleId].comments, id]}};
            debugger;
            return data;
    }

    return state;
}