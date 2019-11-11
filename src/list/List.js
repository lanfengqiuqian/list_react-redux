import React from 'react'

// 导入css样式文件
import './list.css'

// 导入子组件
import ListPortion from './list/ListPortion'
import Calculator from './calculator/Calculator'


class List extends React.Component {

    render() {
        return (
            // 外框部分
            <div className="box">
                {/* 标题部分 */}
                <div class="title">
                    <span id="flag">每天进步一点点,离目标更近一点点</span>
                    <span id="logout">退出</span>
                    <span id="username">crystal</span>
                </div>
                {/* 标题部分 */}
                {/* 导航部分 */}
                <div class="nav">
                    <span id="calculator" class="current">首页</span>
                    <span id="list">收入分析</span>
                    <span>营销转化分析</span>
                    <span>广告管理</span>
                    <span>系统分析</span>
                    <span>用户管理</span>
                    <span>快捷工具</span>
                </div>
                {/* /导航部分 */}
                {/* 列表部分 */}
                <ListPortion className="list" >

                </ListPortion>
                {/* /列表部分 */}
                {/* 计算器部分 */}
                <Calculator className="calculator">

                </Calculator>
                {/* /计算器部分 */}
            </div>
            // /外框部分
        );
    }

}

export default List;