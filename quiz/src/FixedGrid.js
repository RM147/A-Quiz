import React, { Component } from 'react';
import './App.css';
import * as Constants from './Constants.js';
import * as QB from './QuestionBankPokemon.js';
import _ from 'lodash';


class FixedGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lowEnd: Constants.gen0,
            highEnd: Constants.gen1,
            table: _.range(Constants.gen0,Constants.gen1)
        };
    }

    answerMatch = () => {
        if(QB.answerBank.includes(this.state.value)){
            console.log(QB.answerBank.indexOf(this.state.value))
            this.state.table[QB.answerBank.indexOf(this.state.value)] = <img
            src = {"http://www.pokestadium.com/assets/img/sprites/" + (QB.answerBank.indexOf(this.state.value)+1) + ".png"}/>
            console.log(this.state.table)
            this.forceUpdate();                              
            
        }
        
        
    }

    changeValue = (e) => {
        this.setState({ value: e.target.value });

    }


    render() {
        return (
            <div>
                <div><
                    div>Answer: <input className="textbox" onChange={this.changeValue} /></div>
                    <br />
                    <button className="button" onClick={this.answerMatch}>Submit</button></div>
                <div className="fixedGrid">
                    {this.state.table.map(item=>(<div>{item}</div>))}
                </div>
            </div>

        );
    }
}
export default FixedGrid;