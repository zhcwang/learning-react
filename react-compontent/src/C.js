import React, {Component} from 'react';
import A from "./A";

@A
class C extends Component {
    someFunctionFromC(){
        return "我是C组件的方法";
    }

    render() {
        return (
            <div>
                C组件
            </div>
        );
    }
}

export default C;
