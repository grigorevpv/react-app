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
        const {articles, filters, openItemId, deleteArticle, toggleOpenItem} = this.props;
        const articleElements = this.filterArticle(articles, filters).map(article => 
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
    filterArticle = (articles, filters) => {
        const selectedArticles = filters.selected;
        const range = filters.dateRange;
        console.log(range.from + range.to);
        return articles.filter(article => {
            if (!(selectedArticles.length || (range.from && range.to))) {
                return true;
            }
            if (selectedArticles.length || !(range.from && range.to)) {
                return selectedArticles.some(selectArticle => selectArticle.label === article.title);
            }
            if (!selectedArticles.length || (range.from && range.to)) {
                return (new Date(article.date) >= new Date(range.from) && new Date(article.date) <= new Date(range.to));
            }
        });
    }
}

export default connect(({articles, filters}) => {
    const {selected, dateRange: {from, to}} = filters;

    console.log(selected);
    console.log(selected.includes("Hello my new world"));

    // const art = articles.filter(article => {
    //     return ((selectedArticle.length && selectedArticle.include(article.id)) || 
    //             (dateRange.from && dateRange.to && article.date >= dateRange.from && article.id <= dateRange.to))
    // })

    return {
        articles,
        filters
    }
}, {deleteArticle})(accordion(ArticleList));