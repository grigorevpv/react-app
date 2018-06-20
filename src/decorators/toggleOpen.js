import React, { Component as ReactComponent } from 'react';

export default (Component) => class WrapComponent extends ReactComponent {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (<Component {...this.props} {...this.state} toggleOpen = {this.toggleOpen} />)
  }

  toggleOpen = () => {
    debugger;
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

}
