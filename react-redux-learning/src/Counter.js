import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from "./redux/actions/baseaction";
// React component
class Counter extends Component {
    render() {
        const { counter, increase } = this.props;

        return (
            <div>
                <span>{counter}</span>
                <button onClick={increase}>Increase</button>
            </div>
        )
    }
}


//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increase: (...args) => dispatch(actions.increase(...args)),
    }
};

// Connected Component
export default Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

