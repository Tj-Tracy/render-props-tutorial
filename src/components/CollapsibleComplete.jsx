import React from 'react';

class Collapsible extends React.Component {
  state = {
    isOpen: this.props.startOpen,
  }

  closeCollapsible = () => this.setState({isOpen: false})
  openCollapsible = () => this.setState({isOpen: true})

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
    return children({
      isOpen,
      closeCollapsible: this.closeCollapsible,
      openCollapsible: this.openCollapsible,
    });
  }

}

export default Collapsible;