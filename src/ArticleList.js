import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Article from './Article';
import accordion from './decorators/accardion';
import * as filterAction from './actions/FilterActions';

class ArticleList extends Component {

    static propTypes = {
        articleList: PropTypes.array.isRequired,
        openArticleId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        const { setFilter } = this.props.pageAction;
        const {articleList, openArticleId, toggleOpenItem} = this.props;
        const articleElements = articleList.map(article => <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {openArticleId === article.id}
                    toggleOpen = {toggleOpenItem(article.id)}
                />
            </li>)

        return(
            <ul>
                <button onClick={setFilter.bind(this, [])}>Click me</button>
                {articleElements}
            </ul>
        )
    }
}

function mapStateProps(state) {
    return {
        articleList: state.articles,
    }
}

function mapDispatchToProps(dispatch){
    return {
        pageAction: bindActionCreators(filterAction, dispatch)
    }
}

export default connect(mapStateProps, mapDispatchToProps)(accordion(ArticleList));