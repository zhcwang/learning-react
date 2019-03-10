import React, {Component} from 'react';
import './index.css';
import {Link} from "react-router-dom";

const tabBarArr = [{
    img: 'icon-home',
    text: '首页',
    link: '/home'
}, {
    img: 'icon-fenlei',
    text: '分类',
    link: '/category'
}, {
    img: 'icon-gouwuchekong',
    text: '购物车',
    link: '/car'
}, {
    img: 'icon-yonghu',
    text: '未登录',
    link: '/user'
}];
const TabBar = (WrappedCompontent) => class TabBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        this.itemChange = this.itemChange.bind(this);
    }

    itemChange = (i) => {
        this.setState(
            {
                index:i
            }
        )
    };

    render() {
        const url = window.location.href;

        return (
            <div>
                <WrappedCompontent/>
                <div className={'tabbar'}>
                    <div className={'tabbar-content'}>
                        {
                            tabBarArr.map((v, i) => (
                                <Link to={v.link} key={i} className={"tabbar-item" + ((url.indexOf(v.link) > -1) ? " active" : "")}
                                     onClick={() => this.itemChange(i)}>
                                    <div className={'iconfont ' + v.img}></div>
                                    <div className="item-desc">{v.text}</div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
};

export default TabBar;
