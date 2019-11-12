import React from 'react'

// 导入子组件

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
        }
        // 数字区域方法
        this.numHandle = this.numHandle.bind(this);
        // 拼接方法
        this.joint = this.joint.bind(this);
        // 清空方法
        this.clear = this.clear.bind(this);
        // 计算方法
        this.operation = this.operation.bind(this);
        // 百分号方法
        this.percent = this.percent.bind(this);
        // 反向方法
        this.reverse = this.reverse.bind(this);
    }

    // 数字区域方法
    numHandle(number) {
        // 调用拼接方法
        this.joint(number);
    }

    // 拼接方法
    joint(str) {
        // 判断拼接left还是right
        if(this.state.change) {
            // 设置一个中间变量来表示right
            let tmp = this.state.right + str;
            // 拼接右边
            this.setState({
                right: tmp,
                // 更新result并同步更新view
                result: (Math.round(parseFloat(tmp) * 10000)/10000)
            })
        } else {
            // 设置一个中间变量来表示left
            let tmp = this.state.left + str;
            // 拼接左边
            this.setState({
                left: tmp,
                // 更新result并同步更新view
                result: (Math.round(parseFloat(tmp) * 10000)/10000)
            })
        }
    }

    // 清空所有数据方法
    clear() {
        // 清空数据
        this.setState({
            left: 0,
            right: 0,
            result: 0,
            operator: "",
            change: false,
        })
    }

    // 运算方法,传一个运算符进来
    operation(ope) {
        // 判断left是否有值
        if(this.state.left) {
            // 判断right是否有值
            if(this.state.right) {
                // 先判断运算符
                switch(this.state.operator) {
                    case '+' :
                        // 设置一个中间变量用来表示结果
                        let tmp1 = parseFloat(this.state.left) + parseFloat(this.state.right);
                        this.setState({
                            // 计算结果result,并赋给left
                            result: (Math.round(parseFloat(tmp1) * 10000)/10000),
                            left: tmp1,
                            // 将right清零
                            right: 0,
                        })
                        break;
                    case '-' :
                        // 设置一个中间变量用来表示结果
                        let tmp2 = parseFloat(this.state.left) - parseFloat(this.state.right);
                        this.setState({
                            // 计算结果result,并赋给left
                            result: (Math.round(parseFloat(tmp2) * 10000)/10000),
                            left: tmp2,
                            // 将right清零
                            right: 0,
                        })
                        break;
                    case '*' :
                        // 设置一个中间变量用来表示结果
                        let tmp3 = parseFloat(this.state.left) * parseFloat(this.state.right);
                        this.setState({
                            // 计算结果result,并赋给left
                            result: (Math.round(parseFloat(tmp3) * 10000)/10000),
                            left: tmp3,
                            // 将right清零
                            right: 0,
                        })
                        break;
                    case '/' :
                        // 设置一个中间变量用来表示结果
                        let tmp4 = parseFloat(this.state.left) / parseFloat(this.state.right);
                        this.setState({
                            // 计算结果result,并赋给left
                            result: (Math.round(parseFloat(tmp4) * 10000)/10000),
                            left: tmp4,
                            // 将right清零
                            right: 0,
                        })
                        break;
                    default :
                        break;
                }
            } else {
                // 判断运算符是否为等于号
                if(!(ope === '=')) {
                    // 将运算符赋给operator
                    this.setState({
                        operator: ope
                    })
                }
            }
            // 改变拼接位置
            this.setState({
                change: true
            })
        }
    }

    // 百分号方法
    percent() {
        // 判断是left还是right
        if(this.state.left) {
            if(this.state.right) {
                this.setState({
                    right: this.state.right / 100,
                    // 将result改为right
                    result: this.state.right / 100
                })
            } else {
                this.setState({
                    left: this.state.left / 100,
                    // 将result改为left
                    result: this.state.left / 100
                })
            }
        }
    }

    // 符号反向方法
    reverse() {
        console.log(this.state.left, this.state.right)
        // 判断是left还是right
        if(this.state.left) {
            if(this.state.right) {
                this.setState({
                    right: -this.state.right,
                    // 将result改为right
                    result: -this.state.right
                })
            } else {
                this.setState({
                    left: -this.state.left,
                    // 将result改为left
                    result: -this.state.left
                })
            }
        }
    }

    render() {
        return (
            <div className="calculator">
                {/* 加载条的模态框部分 */}
                <div className="wrap">
                    {/* /加载条的模态框部分 */}
                    {/* 显示区域 */}
                    <div className="view">
                        {/* 将需要显示的数据绑定为result */}
                        <span id="real_view">{this.state.result}</span>
                    </div>
                    {/* /显示区域 */}
                    {/* 按键区域 5行4列 */}
                    <div className="key">
                        <div onClick={this.clear}>AC</div>
                        <div onClick={() => this.reverse()}>+/-</div>
                        <div onClick={() => this.percent()}>%</div>
                        <div onClick={() => this.operation("/")}>÷</div>
                        <div onClick={() => this.numHandle("7")}>7</div>
                        <div onClick={() => this.numHandle("8")}>8</div>
                        <div onClick={() => this.numHandle("9")}>9</div>
                        <div onClick={() => this.operation("*")}>x</div>
                        <div onClick={() => this.numHandle("4")}>4</div>
                        <div onClick={() => this.numHandle("5")}>5</div>
                        <div onClick={() => this.numHandle("6")}>6</div>
                        <div onClick={() => this.operation("-")}>-</div>
                        <div onClick={() => this.numHandle("1")}>1</div>
                        <div onClick={() => this.numHandle("2")}>2</div>
                        <div onClick={() => this.numHandle("3")}>3</div>
                        <div onClick={() => this.operation("+")}>+</div>
                        <div onClick={() => this.numHandle("0")}>0</div>
                        <div onClick={() => this.numHandle(".")}>.</div>
                        <div onClick={() => this.operation("=")}>=</div>
                    </div>
                    {/* /按键区域 */}
                </div>
            </div>
        )
    }
}

export default Calculator;