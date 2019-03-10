import React, {Component} from "react";
import {BrowserRouter,Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Car from "./pages/Car";
import User from "./pages/User";


class RouterMap extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/category" component={Category}/>
                    <Route exact path="/car" component={Car}/>
                    <Route exact path="/user" component={User}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default RouterMap;
