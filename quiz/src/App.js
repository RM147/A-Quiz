import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Banner.js';
import Random from './Random.js';
import NavBar from './NavBar.js';

function App() {
  return (
    <div>
    <div className="App"><Banner/></div>
    <div className="App"><NavBar/></div>
     
    </div>
  );
}

export default App;
