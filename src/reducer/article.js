import {articles} from '../fixtures';

export default (state = articles, action) => {
    const {type, payload} = action;

    switch(type) {
        case 'DELETE_ARTICLE': return state.filter(article => article.id !== payload);
    }

    return state;
}