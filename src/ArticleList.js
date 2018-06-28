import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Article from './Article';
import accordion from './decorators/accardion';

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired,
        openArticleId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        const {articleList, openArticleId, toggleOpenItem} = this.props;
        debugger;
        const articleElements = articleList.map(article => <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {openArticleId === article.id}
                    toggleOpen = {toggleOpenItem(article.id)}
                />
            </li>)

        return(
            <ul>
                {articleElements}
            </ul>
        )
    }
}

function mapStateProps(state) {
    debugger;
    return {
        articleList: state.articlesState,
    }
}

export default connect(mapStateProps)(accordion(ArticleList));