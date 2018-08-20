import { DELETE_ARTICLE } from '../constants';

import { normalizedArticles } from '../fixtures';

const articleMap = normalizedArticles.reduce((acc, article) => {
    acc[article.id] = article;
    return acc;
}, {})

export default (state = articleMap, action) => {
    const {type, payload} = action;

    switch(type) {
        case DELETE_ARTICLE: {
            delete state[payload.id];
            debugger;
            return state;
        }
    }

    return state;
}