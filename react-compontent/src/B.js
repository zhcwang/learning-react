import React, {Component} from 'react';
import A from "./A";

class B extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                B组件
                {/* 改造前B组件自己控制自己的input <input type='text' value={this.state.value} onChange={this.handleChange}/>*/}
                <input type='text' {...this.props}/>
                <br/>
                我的名字是：{this.props.value}
                <br/>
                我的年龄是：{this.props.age}
                <br/>
                我的性别是：{this.props.sex}
            </div>
        )
    }
}

export default A(B);

