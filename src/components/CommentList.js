import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';


import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'

function CommentList({comments, isOpen, toggleOpen}) {
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody({comments, isOpen})}
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

function getBody({comments, isOpen}) {
    if (!isOpen) return null
    if (!comments.length) return (
        <div>
            <p>No comments yet</p>
            <CommentForm />
        </div>
    )

    return (
        <div>
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
            </ul>
            <CommentForm/>
        </div>
    )
}

export default connect(({comments}, ownProps) => {
    let commentsId = ownProps.commentsId || [];
    let com = comments.filter(comment => commentsId.includes(comment.id));
    return {comments: com}
})(toggleOpen(CommentList))