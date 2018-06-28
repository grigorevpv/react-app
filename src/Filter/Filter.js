import React, { Component } from 'react';

import Select from 'react-select';

import 'react-select/dist/react-select.css';

export default class Filter extends Component {

    state = {
        value: []
    }

    render() {
        const { articles } =this.props;
        const { value } = this.state;

        const optionArticles = articles.map(article => {return {value: article.id, label: article.title}})

        return(
            <Select 
                name="form-field-name" 
                multi
                value = {value}
                onChange = {this.handleSelectChange}
                options = {optionArticles}

            />
        )
    }

    handleSelectChange = (value) => {
        this.setState({
            value 
        });
    }
}