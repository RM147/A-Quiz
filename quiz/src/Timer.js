import React, { Component } from 'react';
import './App.css';
const ms = require('pretty-ms');

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    // startTimer = () => {
    //     if (this.state.isOn) {
    //         clearInterval(this.timer)
    //         this.setState({ isOn: !this.state.isOn });
    //     } else {
    //         this.timer = setInterval(() => this.setState({
    //             time: this.state.time + 1
    //         }), 1000);
    //         this.setState({ isOn: !this.state.isOn });
    //     }

    // }

    // resetTimer = () => {
    //     if (!this.state.isOn) {
    //         this.setState({ time: 0 })
    //     }

    // } These functions are commented out so they are not lost. Intention is that timer will be used as child component in a page and these functions will be passed so that they have an effect on the parent pages. But of this component is used in future works, I want the functions available for easy reference.
    render() {
        return (
            <div>
                <p>{ms(this.props.time*1000)}</p>
                <button className="play" onClick={this.props.startTimer}>
                &#9655; &#9015;&#9015;</button>
                <button className="play" onClick={this.props.resetTimer} disabled={this.props.isOn}>&#8634;</button>
            </div>


        );
    }
}
export default Timer;