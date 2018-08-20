import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux';
import { deleteArticle } from '../AC';
import { filtratedArticlesSelector } from '../selectors'

class ArticleList extends Component {
    static propTypes = {
        // from store
        filters: PropTypes.object.isRequired,
        articles: PropTypes.object.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired,
        deleteArticle: PropTypes.func.isRequired
    }
    render() {
        const {articles, openItemId, deleteArticle, toggleOpenItem} = this.props;
        const articleElements = [];

        for (let key of Object.keys(articles)) {
            let article = articles[key];
            articleElements.push(
                <li key={key}>
                <Article
                    article = {article}
                    isOpen = {key === openItemId}
                    toggleOpen = {toggleOpenItem(key)}
                    toggleDelete = {deleteArticle}
                    />
                </li>
            )
        }

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

}

export default connect(state => filtratedArticlesSelector(state), {deleteArticle})(accordion(ArticleList));