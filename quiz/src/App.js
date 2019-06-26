import React, { Component } from 'react';
import './App.css';
import Banner from './Banner.js';
import NavBarRand from './NavBarRand.js';
import NavBarGrid from './NavBarGrid.js';
import NavBarHardcore from './NavBarHardcore';
import * as Constants from './Constants.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: ': Hardcore',
      lowEnd: 1,
      lowMessage: '',
      highEnd: 810,
      highMessage: ''
    };
  }

  setRand = () => {
    this.setState({ page: ': Random' })
    this.forceUpdate();
  }

  setGrid = () => {
    this.setState({ page: ': Grid' })
    this.forceUpdate();
  }

  setHardcore = () => {
    this.setState({ page: ': Hardcore' })
    this.forceUpdate();
  }

  returnHome = () => {
    this.setState({ page: '' })
    this.forceUpdate();
  }

  changeLowValue = (e) => {
    if (e.target.value < 1) {
      this.setState({ lowEnd: 1 });
      this.refs.low.value = 1;
      this.setState({lowMessage: "Input was too low, so has been adjusted to 1"});
    } else if (e.target.value > 809) {
      this.setState({ lowEnd: 809 });
      this.refs.low.value = 809;
      this.setState({lowMessage: "Input was too high, so has been adjusted to 809"});
    } else if (e.target.value >= this.state.highEnd) {
      this.setState({ lowEnd: this.state.highEnd - 1 });
    } else {
      this.setState({ lowEnd: e.target.value });
    }
  }

  changeHighValue = (e) => {
    if (e.target.value >810) {
      this.setState({ highEnd: 810 });
    } else if (e.target.value <= this.state.lowEnd) {
      this.setState({ highEnd: this.state.lowEnd -(-1) });
    } else if (e.target.value < 2) {
      this.setState({ highEnd: 2 });
    } else {
      this.setState({ highEnd: e.target.value });
    }
  }

  render() {
    if (this.state.page === ': Random') {
      return (
        <div>
          <div className="App"><Banner returnHome={this.returnHome} page={this.state.page}/></div>
          <div className="App"><NavBarRand /></div>
        </div>
      );

    } else if (this.state.page === ': Grid') {
      return (
        <div>
          <div className="App"><Banner returnHome={this.returnHome} page={this.state.page}/></div>
          <div className="App"><NavBarGrid /></div>
        </div>
      )
    } else if (this.state.page === ': Hardcore') {
      return (
        <div>
          <div className="App"><Banner returnHome={this.returnHome} page={this.state.page}/></div>
          <div className="App"><NavBarHardcore /></div>            
        </div>
      )

    } else {
      return (
        <div>
          <div className="App"><Banner returnHome={this.returnHome} /></div>
          <div className="grid3">
            <h2 className="App">Random or Full Grid?</h2>
            <h3 className="App">Random</h3>
            <p>{Constants.randomExpl}</p>
            <button className="button" onClick={this.setRand}>Random</button>
            <h3 className="App">Grid</h3>
            <p>{Constants.gridExpl}</p>
            <div><button className="button" onClick={this.setGrid}>Grid</button></div>
            <h3 className="App">Hardcore</h3>
            <p>{Constants.hardcoreExpl}</p>
            <button className="button" onClick={this.setHardcore}>Hardcore</button>

            <p>{Constants.choiceExpl}</p>
          </div>
        </div>
      );
    }

  }
}


export default App;
