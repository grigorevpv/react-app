import React, {Component} from 'react';

import CommentList from './CommentList';

class Article extends Component {

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        return (
            <div>
                <h3>{article.title} </h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article, isOpen} = this.props
        if (!isOpen) return null
        return (
            <section>
               {article.text}
               <CommentList ref = {this.setCommentRefs} comments = {article.comments}/>
            </section>
        )
    }

    setCommentRefs = ref => {
        console.log('---->', ref);
    }
}

export default Article;