import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SubApp from "./SubApp";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter : 0
        };
        this.btnClick = this.btnClick.bind(this);

    }

    btnClick(){
        this.setState({
            counter : this.state.counter + 1
        })
    }

    componentWillMount() {
        console.log('compontentWillMount');
    }

    shouldComponentUpdate(newProps, newState){
        console.log("shouldComponentUpdate");
        // 如果返回false则不向下走
        if(newState.counter < 5){
            return true;
        }
        ReactDom.unmountComponentAtNode(document.querySelector("#root"));
        return false;
    }

    componentWillUpdate(){
        console.log("componentWillUpdate");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentDidMount () {
        console.log('compontentDidMount');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    render() {
        console.log("render");

        var style = {
            padding: 50,
            border: "#333 2px dotted",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };

        return (
            <div style={style}>
                <SubApp display={this.state.counter}/>
                <button onClick={this.btnClick}>+</button>
            </div>
        );
    }
}

export default App;
