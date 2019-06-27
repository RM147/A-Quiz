import React, { Component } from 'react';
import './App.css';

class Banner extends Component {

  render() {
    return (
      <h1 onClick={this.props.returnHome}>Quiz Site{this.props.page}</h1>

    );
  }
}
export default Banner;