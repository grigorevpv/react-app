import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux';
import { deleteArticle } from '../AC';

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

export default connect(({articles, filters}) => {
    const {selected, dateRange: {from, to}} = filters;

    let art = articles.filter(article => {
        return ((selected.length && selected.includes(article.id)) || 
                (from && to && article.date >= from && article.date <= to))
    })

    articles = art.length ? art : articles;

    return {
        articles,
        filters
    }
}, {deleteArticle})(accordion(ArticleList));