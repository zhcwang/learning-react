import React, { Component } from 'react';
import TabBar from "../components/TabBar/index";

class Category extends Component {
    render() {
        return (
            <img className={"bg"} src={require('../static/images/category.png')} alt={""}/>
        );
    }
}

export default TabBar(Category);
