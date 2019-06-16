import React, { Component } from 'react';
import './App.css';
import * as QB from './QuestionBankPokemon.js';
import StringSanitiser from './StringSanitiser.js';
import _ from 'lodash';

class FixedGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            table: _.range(this.props.lowEnd, this.props.highEnd),
            score: 0,
            questions: (this.props.highEnd - this.props.lowEnd),
            result: ''
        };
    }

    answerMatch = () => {
        var str = StringSanitiser(this.state.value);
        if (QB.answerBank.includes(str)) {
            for (let i = 0; i < this.state.table.length; i++) {
                if ((QB.answerBank.indexOf(str) + 1) === this.state.table[i]) {
                    this.state.table[i] = <img src={"http://www.pokestadium.com/assets/img/sprites/"
                        + (QB.answerBank.indexOf(str) + 1) + ".png"} alt=''/>
                    this.setState({
                        result: "Number " + (QB.answerBank.indexOf(str) + 1)
                            + ", " + QB.answerBank[QB.answerBank.indexOf(str)] +
                            ", has been discovered."
                    });
                    this.setState({ score: this.state.score + 1 });
                    this.setState({ questions: this.state.questions - 1 });
                    this.refs.answer.value = "";
                    // this.forceUpdate();

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
                        <div >Answer: <input onChange={this.changeValue} ref="answer"
                            onKeyPress={this.isEnter} /></div>
                        <br />
                        <button className="button" onClick={this.answerMatch}>Submit</button>
                        <p>Score: {this.state.score} Pokemon Left to get: {this.state.questions}</p>
                        <p>{this.state.result}</p>
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
                </div>
            );
        }

    }
}
export default FixedGrid;