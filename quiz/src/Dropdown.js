import React, { Component } from 'react';
import './App.css';

class Dropdown extends Component {

    render() {
        return (
            <div>
                <h1>Range: {this.props.low}-{this.props.high - 1}</h1>

            </div>

        );
    }
}
export default Dropdown;