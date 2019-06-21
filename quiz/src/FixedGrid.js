import React, { Component } from 'react';
import './App.css';
import * as QB from './QuestionBankPokemon.js';
import StringSanitiser from './StringSanitiser.js';
import _ from 'lodash';
import Timer from './Timer.js';

class FixedGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            table: _.range(this.props.lowEnd, this.props.highEnd),
            score: 0,
            questions: (this.props.highEnd - this.props.lowEnd),
            result: '',
            time: 0,
            isOn: false
        };
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

    answerMatch = () => {
        if (this.state.isOn) {
            var str = StringSanitiser(this.state.value);
            if (QB.answerBank.includes(str)) {
                if(this.state.questions===1){
                    this.startTimer();
                }
                for (let i = 0; i < this.state.table.length; i++) {
                    if ((QB.answerBank.indexOf(str) + 1) === this.state.table[i]) {
                        this.state.table[i] = <img src={"thumbnails/"
                            + (QB.answerBank.indexOf(str) + 1) + ".png"} alt='' />
                        this.setState({
                            result: "Number " + (QB.answerBank.indexOf(str) + 1)
                                + ", " + QB.answerBank[QB.answerBank.indexOf(str)] +
                                ", has been discovered."
                        });
                        this.setState({ score: this.state.score + 1 });
                        this.setState({ questions: this.state.questions - 1 });
                        this.refs.answer.value = "";

                    }
                }
            }
        }
    }

    changeValue = (e) => {
        this.setState({ value: e.target.value });

    }

    isEnter = (e) => {
        if (e.key === "Enter") {
            this.answerMatch();
        }
    }


    render() {
        if (this.state.questions !== 0) {
            return (
                <div>
                    <div className="sticky">
                        <div className="grid4">
                            <div>
                                <div >Answer: <input onChange={this.changeValue} ref="answer"
                                    onKeyPress={this.isEnter} /></div>
                                <br />
                                <button className="button" onClick={this.answerMatch}>Submit</button>
                                <p>Score: {this.state.score} Pokemon Left to get: {this.state.questions}</p>
                                <p>{this.state.result}</p>
                            </div>

                            <Timer time={this.state.time}
                                isOn={this.state.isOn}
                                startTimer={this.startTimer}
                                resetTimer={this.resetTimer} />
                        </div>
                    </div>
                    <div className="fixedGrid">
                        {this.state.table.map(item => (<div className="gridSquare">{item}</div>))}
                    </div>
                </div>

            );
        } else {
            return (
                <div>
                    <p>You got them all! You really know your stuff. You didn't look things up, did you?</p>

                    <p>Try one of our other quizzes and see how you do.</p>

                    <p>Your time was {this.state.time} s</p>
                </div>
            );
        }

    }
}
export default FixedGrid;