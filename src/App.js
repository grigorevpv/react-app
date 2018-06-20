import React, { Component } from 'react';

import CommentList from './CommentList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openArticleId: null,
    }
  }

  render(){
    const {comments} = this.props;

    return (
      <CommentList 
        comments = {comments}
        isOpen = {this.openArticleId === this.refs.getCommentId}
        
      />
    )
  }
}