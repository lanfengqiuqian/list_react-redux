import React from 'react'
import { connect } from 'react-redux'

// 导入actions
import { toCalculator, toList } from '../../../store/actions'

class Nav extends React.Component {
    render() { 
        return (
            <div className="nav">
                <span id="calculator" onClick={this.props.toCalculator} className={this.props.navCssCalculator}>首页</span>
                <span id="list" onClick={this.props.toList} className={this.props.navCssList}>收入分析</span>
                <span>
                    <label>营销转化分析</label>
                    <label>α</label>
                </span>
                <span>广告管理</span>
                <span>系统分析</span>
                <span>用户管理</span>
                <span>快捷工具</span>
            </div>
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toCalculator: () => {
            dispatch(toCalculator());
        },
        toList: () => {
            dispatch(toList());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav);