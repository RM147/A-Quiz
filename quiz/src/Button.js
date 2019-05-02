import React, { Component } from 'react';
import './App.css';

class Button extends Component {

render() {
    return (
        <button className="gridButton">{this.props.text}</button>
      
    );
  }
}
export default Button;