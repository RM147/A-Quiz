import React, { Component } from 'react';
import './App.css';
import Banner from './Banner.js';
import NavBar from './NavBar.js';
import NavBar2 from './NavBar2.js';
import * as Constants from './Constants.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: ''
    };
  }

  setRand = () => {
    this.setState({ page: 'Rand' })
    this.forceUpdate();
  }

  setGrid = () => {
    this.setState({ page: 'Grid' })
    this.forceUpdate();
  }

  returnHome = () => {
    this.setState({page: ''})
    this.forceUpdate();
  }

  render() {
    if (this.state.page === 'Rand') {
      return (
        <div>
          <div className="App"><Banner returnHome={this.returnHome}/></div>
          <div className="App"><NavBar /></div>
        </div>
      );

    } else if (this.state.page === 'Grid') {
      return (
        <div>
          <div className="App"><Banner returnHome={this.returnHome}/></div>
          <div className="App"><NavBar2 /></div>
        </div>
      )
    }else{
      return (
        <div>
          <div className="App"><Banner returnHome={this.returnHome}/></div>
          <div className="grid3">            
            <h2 className="App">Random or Full Grid?</h2>
            <h3 className="App">Random</h3>
            <p>{Constants.randomExpl}</p>
            <button className="button" onClick={this.setRand}>Rand</button>
            <h3 className="App">Grid</h3>
            <p>{Constants.gridExpl}</p>
            <div><button className="button" onClick={this.setGrid}>Grid</button></div>

            <p>{Constants.choiceExpl}</p>
          </div>
        </div>
      );
    }
    
  }
}


export default App;
