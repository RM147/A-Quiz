import React, { Component } from 'react';
import './App.css';
import * as QB from './QuestionBankPokemon.js';
import * as Constants from './Constants.js';
import Button from './Button.js';

class Random extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            answer: '',
            rand: (Math.floor(Math.random() * (this.props.highEnd-this.props.lowEnd))+this.props.lowEnd),
            score: 0,
            questions: ''
        };
    }

     answerMatch = () =>{
        if(this.state.value===QB.answerBank[this.state.rand-1]){
            this.setState({ answer: 'True' });
            this.state.score+=1;
        }else {
            this.setState({ answer: 'False' });
        }
        this.setState({ rand: (Math.floor(Math.random() * (this.props.highEnd-this.props.lowEnd))+this.props.lowEnd)});
    }

    changeValue = (e) => {
        this.setState({ value: e.target.value });

    }

    changeQuestions1 = () => {
        this.setState({ questions: ''});

    }

    changeQuestions2 = () => {
        this.setState({ questions: 10});

    }

    changeQuestions3 = () => {
        this.setState({ questions: 25});

    }

    changeQuestions4 = () => {
        this.setState({ questions: 50});

    }

    render() {
        return (
            <div>
                <div className="grid2">
                <Button text="Endlessmode" onClick={this.changeQuestions1}/>
                <Button text="10 Questions" onClick={this.changeQuestions2}/>
                <Button text="25 Questions" onClick={this.changeQuestions3}/>
                <Button text="50 Questions" onClick={this.changeQuestions4}/>
                </div>
                
            <h1>{this.state.rand}</h1>            
            <img src={"http://www.pokestadium.com/assets/img/sprites/"+this.state.rand+".png"}/>
            <div>Answer: <input type="text" onChange={this.changeValue}/></div>
            <button onClick={this.answerMatch}>Submit</button>
            <p>{this.state.answer}</p>
            <p>Score: {this.state.score}/{this.state.questions}</p>
            <p>Answers must begin with a capital letter</p>
            </div>

        );
    }
}
export default Random;