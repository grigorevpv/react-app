import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux';

import { changeSelect } from '../../AC';

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => {
        const {changeSelect} = this.props;
        changeSelect({selected})
    };

    render() {
        const { selected } = this.props.selected;
        const { articles } = this.props;
        console.log(selected);
        console.log(articles);
        debugger;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect((state) => ({
    selected: state.filters.articles,
    articles: state.articles
}), {changeSelect})(SelectFilter)