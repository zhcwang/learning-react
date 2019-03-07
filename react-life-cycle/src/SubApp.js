import React, {Component} from 'react';

class SubApp extends Component {

    componentWillReceiveProps(newProps){
        console.log("sub-componentWillReceiveProps:" + JSON.stringify(newProps));
    }

    shouldComponentUpdate(newProps, newState){
        console.log("sub-shouldComponentUpdate");
        return true;
    }

    componentWillUpdate(){
        console.log("sub-componentWillUpdate");
    }

    componentDidUpdate(){
        console.log("sub-componentDidUpdate");
    }

    render() {

        var style = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        };

        return (
            <div style={style}>{this.props.display}</div>
        );
    }
}

export default SubApp;
