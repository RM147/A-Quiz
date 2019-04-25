import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Banner.js';
import Random from './Random.js';

function App() {
  return (
    <div>
    <div className="App"><Banner/></div>
    <div className="App"><Random/></div>
    </div>
  );
}

export default App;
