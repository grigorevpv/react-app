import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Article from './Article';
import accordion from './decorators/accardion';

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired,
        openArticleId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        const {articles = [], openArticleId, toggleOpenItem} = this.props;
        const articleElements = articles.map(article => <li key = {article.id}>
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

export default accordion(ArticleList);