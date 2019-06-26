import React, { Component } from 'react';
import './App.css';
import StringSanitiser from './StringSanitiser.js';
import * as QB from './QuestionBankPokemon.js';
import Dropdown from './Dropdown';
var classnames = require('classnames');

class Hardcore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            answer: '',
            rand: this.props.lowEnd,
            score: 149,
            randMode: false,
            scoreReset: false            
        };
    }

    isEnter = (e) => {
        if (e.key === "Enter") {
            this.answerMatch();
        }
    }

    nextNumber = () => {
        if(this.state.randMode){
            this.setState({ rand: (Math.floor(Math.random() * (this.props.highEnd - this.props.lowEnd)) + this.props.lowEnd) });
        }else{
            this.setState({rand: this.state.rand + 1})
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
            if(this.state.scoreReset){
                this.setState({score: 0});
            }            
        }        
        this.nextNumber();
    }

    changeValue = (e) => {
        this.setState({ value: e.target.value });
    }

    randomModeSwitch = () => {
        this.setState({randMode: !this.state.randMode});

    }

    scoreModeSwitch = () => {
        this.setState({scoreReset: !this.state.scoreReset});

    }

    render() {
        var btnClass = classnames({
            highScore: this.state.score>(this.props.highEnd-this.props.lowEnd)
        });
        return (
            <div>
                <Dropdown low={this.props.lowEnd} high={this.props.highEnd}/>
                <h1>{this.state.rand}</h1>
                <div>Answer: <input onChange={this.changeValue}
                    onKeyPress={this.isEnter} ref="answer" /></div>
                <br />
                <button className="button" onClick={this.answerMatch}>Submit</button>

                <p>{this.state.answer}</p>
                <p className={btnClass}>Score: {this.state.score}</p>
                <button className="button" onClick={this.randomModeSwitch}>
                    {this.state.randMode ? 'Random Mode':"Sequential Mode"}
                </button>                
                <button className="button" onClick={this.scoreModeSwitch}>
                   Scores {this.state.scoreReset ? '':"Not"} Reset
                </button>
            </div>

        );
    }
}
export default Hardcore;