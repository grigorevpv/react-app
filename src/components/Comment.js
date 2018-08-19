import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';

function Comment({comment}) {
    return (
        <div>
            <p>{comment.text} <b>by {comment.user}</b></p>
        </div>
    )
}

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    // from connect
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
}

export default connect((state, ownProps) => {
    let {comments} = state;
    let {id} = ownProps;

    return {comment: comments[id]}
})(Comment)