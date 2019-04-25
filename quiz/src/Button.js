import React, { Component } from 'react';
import './App.css';

class Button extends Component {

constructor(props) {
        super(props);
        
    }

  render() {
    return (
        <button className="button">{this.props.text}</button>
      
    );
  }
}
export default Button;