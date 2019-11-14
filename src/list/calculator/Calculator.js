import React from 'react'

// 导入子组件
import Loading from './components/Loading'
import View from './components/View'
import Key from './components/Key'

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 结果
            result: 0,
            // 左边的数
            left: 0,
            // 右边的数
            right: 0,
            // 运算符号
            operator: "",
            // 控制left和right的拼接
            change: false,
            // 控制加载条的显示和隐藏
            loading: false,
            // 控制模态框透明度
            opacity: 1,
        }
        // 修改状态方法
        this.mySetState = this.mySetState.bind(this);
    }

    // 修改状态方法
    mySetState(obj) {
        this.setState(obj);
    }

    render() {
        // 控制加载条的显示和隐藏
        let showLoading;
        if(this.state.loading) {
            showLoading = <Loading></Loading>
        }
        return (
            <div className="calculator">
                {/* 加载条的模态框部分 */}
                <div className="wrap" style={{opacity: this.state.opacity}}>
                    {/* 加载条区域 */}
                    {showLoading}
                    {/* /加载条区域 */}
                    {/* 显示区域 */}
                    <View payload={this.state} foo={this.mySetState} />
                    {/* /显示区域 */}
                    {/* 按键区域 将参数传给子组件 */}
                    <Key payload={this.state} foo={this.mySetState} />
                    {/* /按键区域 */}
                </div>
            </div>
        )
    }
}

export default Calculator;