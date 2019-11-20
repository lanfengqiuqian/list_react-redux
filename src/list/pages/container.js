import React from 'react'
// import store from '../store/index'
import { connect } from 'react-redux'

// 导入css样式文件
import '../css/list.css'

// 导入子组件
import ListPortion from './components/list/container'
import Calculator from './components/calculator/container'
import Header from './components/header/header'
import Nav from './components/nav/nav'



export class List extends React.Component {
    render() {
        // 一个用来控制列表和计算器的显示和隐藏的变量
        let showItem ;
        // if(store.getState().tabTo.isList) {
        if(this.props.isList) {
            // {/* 列表部分 */}
            showItem = <ListPortion></ListPortion>
        } else {
            // {/* 计算器部分 */}
            showItem = <Calculator></Calculator>
        }

        return (
            // 外框部分
            <div className="box">
                {/* 头部分 */}
                <Header />
                {/* 头部分 */}
                {/* 导航部分 */}
                <Nav />
                {/* /导航部分 */}
                {/* 计算器和列表部分 */}
                {showItem}
                {/* /计算器和列表部分 */}
            </div>
            // /外框部分
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        isList: state.tabTo.isList,
        navCssCalculator: state.tabTo.navCssCalculator,
        navCssList: state.tabTo.navCssList
    }
}

export default connect(mapStateToProps,null)(List);