import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Article from './Article';
import accordion from './decorators/accardion';

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired,
        openArticleId: PropTypes.string,
        toggleOpenArticle: PropTypes.func.isRequired
    }

    render() {
        const {articles = [], openArticleId, toggleOpenArticle} = this.props;
        const articleElements = articles.map(article => <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {openArticleId === article.id}
                    toggleOpen = {toggleOpenArticle(article.id)}
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