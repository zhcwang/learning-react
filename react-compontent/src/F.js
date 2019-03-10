import React, { Component } from 'react';
import E from "./E";
@E
class F extends Component {

    componentWillMount(){
        console.log("F组件生命周期")
    }

    render() {
        return (
            <span>
                ----------这是F组件----------
            </span>
        );
    }
}

export default F;


