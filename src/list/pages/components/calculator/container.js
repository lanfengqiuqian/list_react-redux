import React from 'react'
import { connect } from 'react-redux'

// 导入子组件
import Loading from './components/loading'
import View from './components/view'
import Key from './components/key'

class Calculator extends React.Component {
    render() {
        // 控制加载条的显示和隐藏
        let showLoading;
        if(this.props.loading) {
            showLoading = <Loading></Loading>
        }
        return (
            <div className="calculator">
                {/* 加载条的模态框部分 */}
                <div className="wrap" style={{opacity: this.props.opacity}}>
                    {/* 加载条区域 */}
                    {showLoading}
                    {/* 显示区域 */}
                    <View />
                    {/* 按键区域 将参数传给子组件 */}
                    <Key />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.calculatorMethods.loading,
        opacity: state.calculatorMethods.opacity,
    }
}

export default connect(mapStateToProps, null)(Calculator);