import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';

import { addComment } from '../../AC';
import article from '../../reducer/article';

class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        text: ''
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                user: <input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                comment: <input value = {this.state.text}
                                onChange = {this.handleChange('text')}
                                className = {this.getClassName('text')} />
                <input type = "submit" value = "submit"/>
            </form>
        )
    }

    handleSubmit = ev => {
        let { addComment, articleId } = this.props;
        ev.preventDefault();
        let data = this.state;
        this.setState({
            user: '',
            text: ''
        });
        data.articleId = articleId;
        addComment(data);
    }

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min
        ? 'form-input__error' : ''

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }
}

const limits = {
    user: {
        min: 1,
        max: 15
    },
    text: {
        min: 1,
        max: 50
    }
}

export default connect(null, {addComment})(CommentForm)