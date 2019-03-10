import React, {Component} from 'react';

/**
 * 高阶组件
 * @param WrappedCompontent
 * @returns {{new(): D, prototype: D}}
 */
function d(WrappedCompontent) {
    return class D extends Component {
            render() {
                return (
                    <div>
                        ----------这是D组件----------
                        <WrappedCompontent></WrappedCompontent>
                        ----------这是D组件----------
                    </div>
                );
            }
        }

}

export default d;
