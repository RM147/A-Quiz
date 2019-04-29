import React, { Component } from 'react';
import './App.css';
import * as QB from './QuestionBankPokemon.js';

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

    answerMatch = () => {
        if (this.state.value === QB.answerBank[this.state.rand - 1]) {
            this.setState({ answer: 'Correct!' });
            this.setState({ score: this.state.score + 1 });
        } else {
            this.setState({ answer: 'False. The answer is: ' + QB.answerBank[this.state.rand - 1] });

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
                    <img className={"image" + this.state.easy}
                        src={"http://www.pokestadium.com/assets/img/sprites/" + this.state.rand + ".png"} />
                    <div>Answer: <input className="textbox" onChange={this.changeValue} /></div>
                    <br />
                    <button className="button" onClick={this.answerMatch}>Submit</button>

                    <p>{this.state.answer}</p>
                    <p>Score: {this.state.score} Questions left: {this.state.questions}</p>
                    <p></p>
                    <p>Answers must begin with a capital letter</p>

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