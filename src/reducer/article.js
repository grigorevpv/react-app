import { DELETE_ARTICLE } from '../constants';

import { normalizedArticles } from '../fixtures';

export default (state = normalizedArticles, action) => {
    const {type, payload} = action;

    switch(type) {
        case DELETE_ARTICLE: return state.filter(article => article.id !== payload.id);
    }

    return state;
}