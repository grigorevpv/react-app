import React, { Component as ReactComponent } from 'react';

export default (Component) => class WrapComponent extends ReactComponent {

    state = {
        openArticleId: null,
    }

    render() {
        return <Component {...this.props} {...this.state} toggleOpenItem = {this.toggleOpenItem} />
    }

    toggleOpenItem = (articleId) => ev => {
        this.setState({
            openArticleId: this.state.openArticleId !== articleId ? articleId : null,
        })
    }

}
