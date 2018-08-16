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
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired,
        deleteArticle: PropTypes.func.isRequired
    }
    render() {
        const {articles, openItemId, deleteArticle, toggleOpenItem} = this.props;
        const articleElements = articles.map(article => 
            <li key={article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === openItemId}
                    toggleOpen = {toggleOpenItem(article.id)}
                    toggleDelete = {deleteArticle}
                />
            </li>);

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

}

export default connect(state => filtratedArticlesSelector(state), {deleteArticle})(accordion(ArticleList));