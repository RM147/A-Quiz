import React, { Component } from 'react';
import './App.css';
import StringSanitiser from './StringSanitiser.js';
import * as QB from './QuestionBankPokemon.js';

class Hardcore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            answer: '',
            rand: (Math.floor(Math.random() * (this.props.highEnd - this.props.lowEnd)) + this.props.lowEnd),
            score: 0            
        };
    }

    isEnter = (e) => {
        if (e.key === "Enter") {
            this.answerMatch();
        }
    }

    answerMatch = () => {
        var str = StringSanitiser(this.state.value);
        if (str === QB.answerBank[this.state.rand - 1]) {
            this.setState({ answer: 'Correct!' });
            this.setState({ score: this.state.score + 1 });
            this.refs.answer.value = "";
        } else {
            this.setState({ answer: 'False. The answer is: ' + QB.answerBank[this.state.rand - 1] });
            this.refs.answer.value = "";
            this.setState({score: 0})            
        }

        
        this.setState({ rand: (Math.floor(Math.random() * (this.props.highEnd - this.props.lowEnd)) + this.props.lowEnd) });
    }

    changeValue = (e) => {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div>

                <h1>{this.state.rand}</h1>
                <p>{this.props.lowEnd} {this.props.highEnd}</p>
                <img className="image" src={"thumbnails/" + this.state.rand + ".png"} />
                <div>Answer: <input onChange={this.changeValue}
                    onKeyPress={this.isEnter} ref="answer" /></div>
                <br />
                <button className="button" onClick={this.answerMatch}>Submit</button>

                <p>{this.state.answer}</p>
                <p>Score: {this.state.score}</p>
            </div>

        );
    }
}
export default Hardcore;