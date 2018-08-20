import { DELETE_ARTICLE } from '../constants';

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
            let id = payload.id;
            delete artState[id];
            return artState;
    }

    return state;
}