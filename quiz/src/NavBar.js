import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import * as Constants from './Constants.js';
import Random from './Random.js';
import Gen1 from './Gen1.js';

class NavBar extends Component {
    render() {
        return (
            <Router>

                <div className="grid">
                    <div><NavLink to="/"><button variant="info">All</button></NavLink></div>
                    <div><NavLink to="/gen1"><button variant="info">Gen1</button></NavLink></div>
                    <div><NavLink to="/gen2"><button variant="info">Gen2</button></NavLink></div>
                    <div><NavLink to="/gen3"><button variant="info">Gen3</button></NavLink></div>
                    <div><NavLink to="/gen4"><button variant="info">Gen4</button></NavLink></div>
                    <div><NavLink to="/gen5"><button variant="info">Gen5</button></NavLink></div>
                    <div><NavLink to="/gen6"><button variant="info">Gen6</button></NavLink></div>
                </div>
                <div><Route exact path="/" render={()=>
                <Random lowEnd={Constants.gen0}
                highEnd={Constants.gen6} />} /></div>
                <div><Route exact path="/gen1" render={()=>
                <Random lowEnd={Constants.gen0}
                highEnd={Constants.gen1} />} /></div>
                <div><Route exact path="/gen2" render={()=>
                <Random lowEnd={Constants.gen1}
                highEnd={Constants.gen2} />} /></div>
                <div><Route exact path="/gen3" render={()=>
                <Random lowEnd={Constants.gen2}
                highEnd={Constants.gen3} />} /></div>
                <div><Route exact path="/gen4" render={()=>
                <Random lowEnd={Constants.gen3}
                highEnd={Constants.gen4} />} /></div>
                <div><Route exact path="/gen5" render={()=>
                <Random lowEnd={Constants.gen4}
                highEnd={Constants.gen5} />} /></div>
                <div><Route exact path="/gen6" render={()=>
                <Random lowEnd={Constants.gen5}
                highEnd={Constants.gen6} />} /></div>
            </Router>



        );
    }
}
// Rename later
export default NavBar;