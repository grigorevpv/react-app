import React, { Component } from 'react'
import Article from './Article'

export default class ArticleList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            openArticleId: null,
        }
    }

    render() {
        const {articles} = this.props;
        const articleElements = articles.map(article => <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {this.state.openArticleId === article.id}
                    toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
                />
            </li>)

        return(
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleOpenArticle(articleId) {
        this.setState({
            openArticleId: articleId,
        })
    }
}