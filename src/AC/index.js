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
    console.log('try delete article');
    return {
        type: 'DELETE_ARTICLE',
        payload: id
    }
}