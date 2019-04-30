import React, { Component } from 'react';
import './App.css';
import * as Constants from './Constants.js';
import * as QB from './QuestionBankPokemon.js';
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
        if (QB.answerBank.includes(this.state.value)) {
            for(let i = 0;i<this.state.table.length;i++){
                if ((QB.answerBank.indexOf(this.state.value)+1) === this.state.table[i]) {
                    this.state.table[i] = <img src={"http://www.pokestadium.com/assets/img/sprites/" 
                    + (QB.answerBank.indexOf(this.state.value) + 1) + ".png"} />
                    this.setState({ result: "Number " + (QB.answerBank.indexOf(this.state.value)+1) 
                    + ", "+QB.answerBank[QB.answerBank.indexOf(this.state.value)]+ 
                    ", has been discovered."});
                    this.setState({ score: this.state.score + 1 });
                    this.setState({ questions: this.state.questions - 1 });
                    this.forceUpdate();
    
                }
            } 
        }


    }

    changeValue = (e) => {
        this.setState({ value: e.target.value });

    }


    render() {
        if(this.state.questions!==0){
            return (
                <div>
                    <div className="sticky">
                        <div >Answer: <input onChange={this.changeValue} /></div>
                        <br />
                        <button className="button" onClick={this.answerMatch}>Submit</button>
                        <p>Score: {this.state.score} Pokemon Left to get: {this.state.questions}</p>
                        </div>
    
                    
                    <p>{this.state.result}</p>
                    <div className="fixedGrid">
                        {this.state.table.map(item => (<div className="gridSquare">{item}</div>))}
                    </div>
                </div>
    
            );
        }else{
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