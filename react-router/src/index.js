import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Dufu from "./Dufu";
ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route exact path="/" component={Home}/>
            <Route path="/df" component={Dufu}/>
        </App>
    </BrowserRouter>
    ,
    document.getElementById('root'));

