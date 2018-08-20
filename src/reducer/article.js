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
            debugger;
            let id = payload.id;
            delete state[id];
            return state;
    }

    return state;
}