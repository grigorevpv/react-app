import React, { Component as ReactComponent } from 'react';

export default (Component) => class WrapComponent extends ReactComponent {

  state = {
      isOpen: false,
  };

  render() {
    return (<Component {...this.props} {...this.state} toggleOpen = {this.toggleOpen} />)
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

}
