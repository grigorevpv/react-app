import { normalizedComments } from '../fixtures';

export default (comments = normalizedComments, action) => {
    const {type} = action

    switch (type) {
    }

    return comments
}