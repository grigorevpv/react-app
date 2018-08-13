import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux';
import { deleteArticle } from '../AC';

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired,
        deleteArticle: PropTypes.func.isRequired
    }
    render() {
        const { articles, openItemId, toggleOpenItem, deleteArticle } = this.props;
        console.log(deleteArticle);
        const articleElements = articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
                toggleDelete = {deleteArticle}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect((state) => ({
    articles: state.articles
}), {deleteArticle})(accordion(ArticleList));