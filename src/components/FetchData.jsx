import React from 'react';

class FetchData extends React.Component {
  
  state = {
    loading: true,
    data: [],
    error: false,
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState({ loading: false, data}))
      .catch(error => this.setState({loading: false, error}));
  }

  render() {
    const { children } = this.props;
    const { loading, data, error } = this.state;
    return children({loading, data, error});
  }
}

export default FetchData;