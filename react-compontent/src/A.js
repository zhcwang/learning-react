import React, { Component } from 'react';

function A(WrappedCompontent) {

    return class A extends Component {
        constructor(props){
            super(props);
            this.state = {
                inputValue :  ""
            };
            this.onInputChange = this.onInputChange.bind(this);
        }

        onInputChange = (e) => {
            this.setState(
                {
                    inputValue :  e.target.value
                }
            );
        };

        render() {
            const {age, ...otherProps} = this.props;
            // 注意看这里,state和onChange 事件全都是给子组件用的，相当于从子组件中抽公共方法，和java继承有点像
            const newProps = {
                value: this.state.inputValue,
                onChange: this.onInputChange
            };
            return (
                <div>
                    <div>
                        ----------这是A组件----------
                        {/* 后面那句this.props就非常的关键了，把classA的属性传递给B,注意看这个删除属性的方法 */}
                        <WrappedCompontent sex={'男'} {...otherProps} {...newProps}/>
                        ----------这是A组件----------
                    </div>
                </div>
            );
        }

    }
}

export default A;



