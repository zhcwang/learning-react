import React, {Component} from 'react';

class TodoItem extends Component{
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    // 子组件和父组件通信需要通过调用父组件传递过来的方法
    handleItemClick() {
        // 向父组件传值通知删除自己
        const {index} = this.props;
        this.props.delete(index);
    }

    render() {
        // ES6 结构化赋值，等于在props中获取content属性
        const {content} = this.props;
        return (
            <li onClick={this.handleItemClick}>{content}</li>
        );
    }
}

export default TodoItem;