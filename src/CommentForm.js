import React, { Component } from 'react';

import './commentForm.css'

export default class CommentForm extends Component {
  state = {
    nick: '',
    comment: '',
  }

  render() {
    return(
      <div>
        <input type = 'text' 
               value = {this.state.nick} 
               onChange = {this.handleInput('nick')} 
               className = {this.getClassName('nick')}/>
        <input type = 'text' 
               value = {this.state.comment} 
               onChange = {this.handleInput('comment')} 
               className = {this.getClassName('comment')}/>
      </div>
    )
  }

  getClassName = type => (this.state[type].length < this.limit[type].min || this.state[type].length > this.limit[type].max) ? 'warning' : ''

  handleInput = (type) => (ev) => {
    if (ev.target.value > this.limit[type].max) {
      return;
    }

    this.setState({
      [type]: ev.target.value,
    })
    
  }

  limit = {
    nick: {
      min: 5,
      max: 15,
    },
    comment: {
      min: 10,
      max: 25,
    }
  }
}