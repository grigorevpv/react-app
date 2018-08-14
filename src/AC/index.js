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

export function setFilter(filter) {
    return {
        type: 'SET_FILTER',
        payload: {filter}
    }
}