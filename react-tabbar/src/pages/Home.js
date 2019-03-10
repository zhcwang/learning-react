import React, { Component } from 'react';
import TabBar from '../components/TabBar/index';
class Home extends Component {
    render() {
        return (
            <img className={"bg"} src={require('../static/images/home.png')} alt={""}/>
        );
    }
}

export default TabBar(Home);
