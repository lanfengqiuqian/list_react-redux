import store from '../store/index'
import axios from 'axios'

// 切换到计算器方法
export function toCalculator (data) {
    return {
        type: 'toCalculator',
        data: {
            isList: false,
            navCssCalculator: "current",
            navCssList: ""
        }
    }
}

// 切换到列表方法
export function toList (data) {
    return {
        type: 'toList',
        data: {
            isList: true,
            navCssCalculator: "",
            navCssList: "current"
        }
    }
}

// 查询所有数据方法
export function getAll () {
    let { num, currentPage } = store.getState().listMethods;
    // 参数拼接到地址栏
    let url = 'http://pre.zhushang.net/Supplychain/getDataForHavePost?type=1&page='+currentPage+'&num='+num;
    return () => {
        axios.get(url)
        .then((response) => {
            getList(response.data)
        })
    }
}

// 获取所有list
const getList = (data) => {
    store.dispatch({
        type: 'getAll',
        data: {
            listItems: data
        }
    })
}

// 下一页方法
export function nextPage() {
    let {currentPage, num} = store.getState().listMethods;
    // 总页数
    let totalPages = Math.ceil(256 / num);
    // 判断边界
    if(currentPage < totalPages) {
        // 当前页数加一
        return {
            type: 'nextPage',
            data: {
                currentPage: (currentPage + 1)
            }
        }
    }
}

// 上一页方法
export function lastPage() {
    let {currentPage, num} = store.getState().listMethods;
    // 判断边界
    if(currentPage > 1) {
        // 当前页数减一
        return {
            type: 'lastPage',
            data: {
                currentPage: (currentPage - 1)
            }
        }
    }
}

// 过滤页数方法
export function filterPage(num) {
    return {
        type: 'filterPage',
        data: {
            num: parseInt(num)
        }
    }
}

// 拼接方法
export function joint(str) {
    console.log(str)
    // 判断拼接left还是right
    if(store.getState().calculatorMethods.change) {
    // 设置一个中间变量表示原来的right
        let tmp = store.getState().calculatorMethods.right;
        // 开始拼接right
        return {
            type: 'joint',
            data: {
                right: tmp + str,
                result: (Math.round(parseFloat(tmp + str) * 10000)/10000)
            }
        }
    } else {
        // 设置一个中间变量来表示left
        let tmp = store.getState().calculatorMethods.left;
        // 开始拼接左边
        return {
            type: 'joint',
            data: {
                left: tmp + str,
                result: (Math.round(parseFloat(tmp + str) * 10000)/10000)
            }
        }
    }
}

// 清空所有数据方法
export function clear() {
    return {
        type: 'clear',
        data: {
            left: 0,
            right: 0,
            result: 0,
            operator: "",
            change: false,
        }
    }
}

// 百分号方法
export function percent() {
    // 判断拼接left还是right
    if(store.getState().calculatorMethods.right) {
        // 设置一个中间变量表示原来的right
        let tmp = store.getState().calculatorMethods.right;
        // 开始拼接right
        return {
            type: 'percent',
            data: {
                right: tmp / 100,
                result: tmp / 100
            }
        }
    } else {
        // 设置一个中间变量来表示left
        let tmp = store.getState().calculatorMethods.left;
        // 开始拼接左边
        return {
            type: 'percent',
            data: {
                left: tmp / 100,
                result: tmp / 100
            }
        }
    }
}

// 符号反向方法
export function reverse() {
    // 判断拼接left还是right
    if(store.getState().calculatorMethods.right) {
        // 设置一个中间变量表示原来的right
        let tmp = store.getState().calculatorMethods.right;
        // 开始拼接right
        return {
            type: 'percent',
            data: {
                right: -tmp,
                result: -tmp
            }
        }
    } else {
        // 设置一个中间变量来表示left
        let tmp = store.getState().calculatorMethods.left;
        // 开始拼接左边
        return {
            type: 'percent',
            data: {
                left: -tmp,
                result: -tmp
            }
        }
    }
}

// 封装一个最终方法,用于显示结果和加载条
function myFinally(tmp){
    // 显示加载条和模态框
    function show() {
        return {
            type: 'show',
            data: {
                loading: true,
                opacity: .5
            }
        }
    }
    // 关闭加载条和模态框
    function close(tmp) {
        return {
            type: 'close',
            data: {
                loading: false,
                opacity: 1,
                // 计算结果result,并赋给left
                result: (Math.round(parseFloat(tmp) * 10000)/10000),
                left: tmp,
                // 将right清零
                right: 0
            }
        }
    }
    store.dispatch(show());
    setTimeout(() => {
        store.dispatch(close(tmp));
    }, 1500)
};


// 运算方法,传一个运算符进来
export function operation(ope) {
    let {left, right, operator} = store.getState().calculatorMethods;
    // 判断left是否有值
    if(left) {
        // 判断right是否有值
        if(right) {
            // 先判断运算符
            switch(operator) {
                case '+' :
                    // 设置一个中间变量用来表示结果
                    let tmp1 = parseFloat(left) + parseFloat(right);
                    // 调用最终方法
                    myFinally(tmp1);
                    break;
                case '-' :
                    // 设置一个中间变量用来表示结果
                    let tmp2 = parseFloat(left) - parseFloat(right);
                    // 调用最终方法
                    myFinally(tmp2);
                    break;
                case '*' :
                    // 设置一个中间变量用来表示结果
                    let tmp3 = parseFloat(left) * parseFloat(right);
                    // 调用最终方法
                    myFinally(tmp3);
                    break;
                case '/' :
                    // 设置一个中间变量用来表示结果
                    let tmp4 = parseFloat(left) / parseFloat(right);
                    // 调用最终方法
                    myFinally(tmp4);
                    break;
                default :
                    break;
            }
        }
        // 判断运算符是否为等于号
        if(!(ope === '=')) {
            // 将运算符赋给operator,不需要调用getState
            store.dispatch({
                type: 'common',
                data: {
                    operator: ope
                }
            })
        }
        // 改变拼接位置,由于不需要在视觉上更新,所以不调用getState
        store.dispatch({
            type: 'common',
            data: {
                change: true
            }
        })
    }
}
