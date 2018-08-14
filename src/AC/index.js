export function increment() {
    return {
        type: 'INCREMENT'
    }
}

export function decrement() {
    return {
        type: 'DECREMENT'
    }
}

export function deleteArticle(id) {
    return {
        type: 'DELETE_ARTICLE',
        payload: {id}
    }
}

export function changeDateRange(dateRange) {
    return {
        type: 'CHANGE_DATE_RANGE',
        payload: {dateRange}
    }
}

export function changeSelect(articles) {
    return {
        type: 'CHANGE_SELECT',
        payload: {articles}
    }
}