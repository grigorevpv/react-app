import { INCREMENT, DECREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION } from '../constants';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: {dateRange}
    }
}

export function changeSelect(articles) {
    return {
        type: CHANGE_SELECTION,
        payload: {articles}
    }
}