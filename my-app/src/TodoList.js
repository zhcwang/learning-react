import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputValue: ''
        };
        {/*这两个this必须得明白原型链调用，第一个this是这Todolist这个class,第二个this是指函数运行时那个button*/
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleBtnClick() {
        this.setState({
            // ES6语法..., 表示展开运算符
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleItemClick(index) {
        // 尽量不要直接修改state中的数据，而是把state里面的复杂对象拷贝出来
        // 1、方便调试 2、避免不必要的性能问题
        let list = [...this.state.list];
        list.splice(index, 1);
        // ES6语法，键和值一样时可以省略:list
        this.setState({list})
    }

    handleDelete(index) {
        let list = [...this.state.list];
        list.splice(index, 1);
        // ES6语法，键和值一样时可以省略:list
        this.setState({list})
    }

    getTodoItems() {
        return (
            this.state.list.map((item, index) => {
                // return <li onClick={this.handleItemClick.bind(this, index)} key={index}>{item}</li>
                // key 是针对组件来说的
                return <TodoItem key={index} content={item} index={index} delete={this.handleDelete}/>;
            })
        )
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange}/>

                    <button className='redBtn' style={{background: 'red', color: '#000'}}
                            onClick={this.handleBtnClick}>Add
                    </button>
                </div>
                <ul>
                    {this.getTodoItems()}
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;
