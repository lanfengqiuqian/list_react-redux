import React from 'react'

// 导入css样式文件
import '../css/list.css'

// 导入子组件
import ListPortion from '../list/ListPortion'
import Calculator from '../calculator/Calculator'


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 用于控制计算器和列表的显示和隐藏
            isList: false,
            // 通过控制类名控制nav的css样式
            nav_css_calculator: "current",
            nav_css_list: "",
        };
        this.toCalculator = this.toCalculator.bind(this);
        this.toList = this.toList.bind(this);
    }

    // 切换到计算器方法
    toCalculator() {
        this.setState({
            isList: false,
            nav_css_calculator: "current",
            nav_css_list: ""
        })
    }

    // 切换到列表方法
    toList() {
        this.setState({
            isList: true,
            nav_css_calculator: "",
            nav_css_list: "current"
        })
    }

    render() {
        // 一个用来控制列表和计算器的显示和隐藏的变量
        let showItem ;
        if(this.state.isList) {
            // {/* 列表部分 */}
            showItem = <ListPortion></ListPortion>
            // {/* /列表部分 */}
        } else {
            // {/* 计算器部分 */}
            showItem = <Calculator></Calculator>
            // {/* /计算器部分 */}
        }

        return (
            // 外框部分
            <div className="box">
                {/* 标题部分 */}
                <div className="title">
                    <span id="flag">每天进步一点点,离目标更近一点点!</span>
                    <span id="logout">退出</span>
                    <span id="username">段惠乾</span>
                </div>
                {/* 标题部分 */}
                {/* 导航部分 */}
                <div className="nav">
                    <span id="calculator" onClick={this.toCalculator} className={this.state.nav_css_calculator}>首页</span>
                    <span id="list" onClick={this.toList} className={this.state.nav_css_list}>收入分析</span>
                    <span>
                        <label>营销转化分析</label>
                        <label>α</label>
                    </span>
                    <span>广告管理</span>
                    <span>系统分析</span>
                    <span>用户管理</span>
                    <span>快捷工具</span>
                </div>
                {/* /导航部分 */}
                {/* 计算器和列表部分 */}
                {showItem}
                {/* /计算器和列表部分 */}
            </div>
            // /外框部分
        );
    }

}

export default List;