import React from 'react'

class Key extends React.Component {
    constructor(props) {
        super(props);
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
        // 最终显示结果和加载条方法
        this.finally = this.finally.bind(this);       
    }

    // 生命周期方法
    componentDidMount() {

    }

    // 数字区域方法
    numHandle(number) {
        // 调用拼接方法
        this.joint(number);
    }

    // 拼接方法
    joint(str) {
        // 判断拼接left还是right
        if(this.props.payload.change) {
            // 设置一个中间变量来表示right
            let tmp = this.props.payload.right + str;
            // 拼接右边
            this.props.foo({
                right: tmp,
                // 更新result并同步更新view
                result: (Math.round(parseFloat(tmp) * 10000)/10000)
            })
        } else {
            // 设置一个中间变量来表示left
            let tmp = this.props.payload.left + str;
            // 拼接左边
            this.props.foo({
                left: tmp,
                // 更新result并同步更新view
                result: (Math.round(parseFloat(tmp) * 10000)/10000)
            })
        }
    }

    // 清空所有数据方法
    clear() {
        // 清空数据
        this.props.foo({
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
        if(this.props.payload.left) {
            // 判断right是否有值
            if(this.props.payload.right) {
                // 先判断运算符
                switch(this.props.payload.operator) {
                    case '+' :
                        // 设置一个中间变量用来表示结果
                        let tmp1 = parseFloat(this.props.payload.left) + parseFloat(this.props.payload.right);
                        // 调用最终方法
                        this.finally(tmp1);
                        break;
                    case '-' :
                        // 设置一个中间变量用来表示结果
                        let tmp2 = parseFloat(this.props.payload.left) - parseFloat(this.props.payload.right);
                        // 调用最终方法
                        this.finally(tmp2);
                        break;
                    case '*' :
                        // 设置一个中间变量用来表示结果
                        let tmp3 = parseFloat(this.props.payload.left) * parseFloat(this.props.payload.right);
                        // 调用最终方法
                        this.finally(tmp3);
                        break;
                    case '/' :
                        // 设置一个中间变量用来表示结果
                        let tmp4 = parseFloat(this.props.payload.left) / parseFloat(this.props.payload.right);
                        // 调用最终方法
                        this.finally(tmp4);
                        break;
                    default :
                        break;
                }
            }
            // 判断运算符是否为等于号
            if(!(ope === '=')) {
                // 将运算符赋给operator
                this.props.foo({
                    operator: ope
                })
            }
            // 改变拼接位置
            this.props.foo({
                change: true
            })
        }
    }

    // 最终显示结果和加载条方法,参数为需要显示的数
    finally(tmp) {
        // 显示加载条和模态框
        this.props.foo({
            loading: true,
            opacity: .5
        })
        // 关闭加载条
        setTimeout(() => {
            this.props.foo({
                loading: false,
                opacity: 1,
                // 计算结果result,并赋给left
                result: (Math.round(parseFloat(tmp) * 10000)/10000),
                left: tmp,
                // 将right清零
                right: 0,
            })
        }, 1500);
    }

    // 百分号方法
    percent() {
        // 判断是left还是right
        if(this.props.payload.left) {
            if(this.props.payload.right) {
                this.props.foo({
                    right: this.props.payload.right / 100,
                    // 将result改为right
                    result: this.props.payload.right / 100
                })
            } else {
                this.props.foo({
                    left: this.props.payload.left / 100,
                    // 将result改为left
                    result: this.props.payload.left / 100
                })
            }
        }
    }

    // 符号反向方法
    reverse() {
        // 判断是left还是right
        if(this.props.payload.left) {
            if(this.props.payload.right) {
                this.props.foo({
                    right: -this.props.payload.right,
                    // 将result改为right
                    result: -this.props.payload.right
                })
            } else {
                this.props.foo({
                    left: -this.props.payload.left,
                    // 将result改为left
                    result: -this.props.payload.left
                })
            }
        }
    }
    

    render() {
        return (
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
        );
    }
}

export default Key;

