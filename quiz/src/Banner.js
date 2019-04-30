import React, { Component } from 'react';
import './App.css';

class Banner extends Component {

returnHome = () => {
  this.props.returnHome();
}

  render() {
    return (
        <h1 onClick={this.returnHome}>Quiz Site</h1>
      
    );
  }
}
export default Banner;