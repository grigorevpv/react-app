export default (count = 0, action) => {
    const {type} = action

    switch (type) {
        case 'INCREMENT': return count + 1;
        case 'DECREMENT': return count > 0 ? count - 1 : count;
    }

    return count
}