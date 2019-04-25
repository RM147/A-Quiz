import React, { Component } from 'react';
import './App.css';
import * as QB from './QuestionBank.js';

class Random extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            answer: '',
            range: QB.length,
            rand: (Math.floor(Math.random() * QB.length)),
            score: 0
        };
    }

    answerMatch = () =>{
        if(this.state.value===QB.answerBank[this.state.rand-1]){
            this.setState({ answer: 'True' });
            this.state.score+=1;
        }else {
            this.setState({ answer: 'False' });
        }
        this.setState({ rand: (Math.floor(Math.random() * QB.length)+1)});
    }

    changeValue = (e) => {
        this.setState({ value: e.target.value });

    }

   render() {
        return (
            <div>
            <h1>{this.state.rand}</h1>            
            <img src={"http://www.pokestadium.com/assets/img/sprites/"+this.state.rand+".png"}/>
            <div>Answer: <input type="text" onChange={this.changeValue}/></div>
            <button onClick={this.answerMatch}>Submit</button>
            <p>{this.state.answer}</p>
            <p>Score: {this.state.score}</p>
            </div>

        );
    }
}
export default Random;