import React, { Component } from 'react';

import Comment from './Comment';
import CommentForm from './CommentForm';
import toggleOpen from './decorators/toggleOpen';

function CommentList({comments = [], isOpen, toggleOpen}) {
    render() {
        const text = this.state.isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick = { this.toggleOpen }>{ text }</button>
                {this.getBody()}
            </div>
        )
    }

    const text = isOpen ? 'hide comments' : 'show comments'
    return (
        <div>
            <button onClick = {toggleOpen}>{ text }</button>
            {getBody({isOpen, comments})}
            <CommentForm />
        </div>
    )
}

function getBody(props) {
    const {comments, isOpen} = props;
    if (!isOpen) return null

    if (!comments || !comments.length) return <p>No comments yet</p>

    return (
        <ul>
            {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
        </ul>
    )
}

export default toggleOpen(CommentList)