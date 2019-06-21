import React, { Component } from 'react';
import './App.css';
import * as QB from './QuestionBankPokemon.js';
import StringSanitiser from './StringSanitiser.js';

class Random extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            answer: '',
            rand: (Math.floor(Math.random() * (this.props.highEnd - this.props.lowEnd)) + this.props.lowEnd),
            score: 0,
            fixedQuestions: 0,
            questions: 'N/A',
            easy: "True"
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
        }

        if (this.state.questions !== 'N/A') {
            this.setState({ questions: this.state.questions - 1 });
        }
        this.setState({ rand: (Math.floor(Math.random() * (this.props.highEnd - this.props.lowEnd)) + this.props.lowEnd) });
    }

    changeValue = (e) => {
        this.setState({ value: e.target.value });

    }

    changeQuestions1 = () => {
        this.setState({ questions: 'N/A' });

    }

    changeQuestions2 = () => {
        this.setState({ questions: 10 });
        this.setState({ fixedQuestions: 10 });
        this.setState({ score: 0 });

    }

    changeQuestions3 = () => {
        this.setState({ questions: 25 });
        this.setState({ fixedQuestions: 25 });
        this.setState({ score: 0 });

    }

    changeQuestions4 = () => {
        this.setState({ questions: 50 });
        this.setState({ fixedQuestions: 50 });
        this.setState({ score: 0 });

    }

    easyModeSwitch = () => {
        if (this.state.easy === "False") {
            this.setState({ easy: "True" });
        } else if (this.state.easy === "True") {
            this.setState({ easy: "False" });
        }

    }

    render() {
        if (this.state.questions !== 0) {
            return (
                <div>
                    <div className="grid2">
                        <button className="gridButton" onClick={this.changeQuestions1}>Endless</button>
                        <button className="gridButton" onClick={this.changeQuestions2}>10 Questions</button>
                        <button className="gridButton" onClick={this.changeQuestions3}>25 Questions</button>
                        <button className="gridButton" onClick={this.changeQuestions4}>50 Questions</button>
                    </div>

                    <h1>{this.state.rand}</h1>                    
                    <img className="Pokemon" src={"thumbnails/"+this.state.rand+".png"}/>
                    <div>Answer: <input onChange={this.changeValue}
                        onKeyPress={this.isEnter} ref="answer" /></div>
                    <br />
                    <button className="button" onClick={this.answerMatch}>Submit</button>

                    <p>{this.state.answer}</p>
                    <p>Score: {this.state.score} Questions left: {this.state.questions}</p>
                    <button className="button" onClick={this.easyModeSwitch}>Easy Mode Enabled: {this.state.easy}</button>
                </div>
            );
        } else {
            return (
                <div>
                    <p>Quiz Complete. Your score was {(this.state.score / this.state.fixedQuestions) * 100}%</p>

                    <p>Try one of our other quizzes and see how you do.</p>
                </div>

            );
        }



    }
}
export default Random;