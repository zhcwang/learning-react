import React, { Component } from 'react';
import {  Route, NavLink } from "react-router-dom";
import './css/style.css';
import Home from "./Home";
import Dufu from "./Dufu";
class App extends Component {
  render() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
            <li><NavLink exact activeClassName="active" to={"/"}>李白</NavLink></li>
            <li><NavLink activeClassName="active" to={"/df"}>杜甫</NavLink></li>
            <li><NavLink activeClassName="active" to={"/lsy"}>李商隐</NavLink></li>
        </ul>
        <div className="content">
            <Route path="/" exact component={Home} />
            <Route path="/df" component={Dufu} />
        </div>
     </div>
    );
  }
}

export default App;
