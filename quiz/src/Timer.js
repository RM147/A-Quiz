import React, { Component } from 'react';
import './App.css';
import play from './playbutton.png';
const ms = require('pretty-ms');


class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            isOn: false
        }
    }

    startTimer = () => {
        if (this.state.isOn) {
            clearInterval(this.timer)
            this.setState({ isOn: !this.state.isOn });
        } else {
            this.timer = setInterval(() => this.setState({
                time: this.state.time + 1
            }), 1000);
            this.setState({ isOn: !this.state.isOn });
        }

    }

    resetTimer = () => {
        if (!this.state.isOn) {
            this.setState({ time: 0 })
        }

    }

    render() {
        return (
            <div>
                <p>{ms(this.state.time*1000)}</p>
                <button className="play" onClick={this.startTimer}>&#9655; &#9015;&#9015;</button>
                <button className="play" onClick={this.resetTimer} disabled={this.state.isOn}>&#8634;</button>
            </div>


        );
    }
}
export default Timer;