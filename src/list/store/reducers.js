// 工具函数,用于组织多个reducer,并返回reducer集合
import { combineReducers } from 'redux'
// 默认值导入
import initialState from './state'

// 切换到计算器和列表方法
const tabTo = (state = initialState, action) => {
    switch (action.type) {
        case 'toCalculator':
            return Object.assign({}, JSON.parse(JSON.stringify(state)), action.data);
        case 'toList':
            return Object.assign({}, JSON.parse(JSON.stringify(state)), action.data);
        default :
            return state;
    }
}

// 列表页面方法
const listMethods = (state = initialState, action) => {
    switch (action.type) {
        case 'getAll' :
            console.log(2222)
            return Object.assign({}, JSON.parse(JSON.stringify(state)), action.data);
        case 'nextPage' :
            return Object.assign({}, JSON.parse(JSON.stringify(state)), action.data);
        case 'lastPage' :
            return Object.assign({}, JSON.parse(JSON.stringify(state)), action.data);
        case 'filterPage' :
            return Object.assign({}, JSON.parse(JSON.stringify(state)), action.data);
        default :
            return state;
    }
}

// 计算器页面方法
const calculatorMethods = (state = initialState, action) => {
    switch (action.type) {
        case 'joint' :
            return Object.assign({}, JSON.parse(JSON.stringify(state)), action.data);
        case 'clear' :
            return Object.assign({}, JSON.parse(JSON.stringify(state)), action.data);
        case 'percent' :
            return Object.assign({}, JSON.parse(JSON.stringify(state)), action.data);
        case 'reverse' :
            return Object.assign({}, JSON.parse(JSON.stringify(state)), action.data);
        case 'show' :
            return Object.assign({}, JSON.parse(JSON.stringify(state)), action.data);
        case 'close' :
            return Object.assign({}, JSON.parse(JSON.stringify(state)), action.data);
        case 'change' :
            return Object.assign({}, JSON.parse(JSON.stringify(state)), action.data);
        case 'myEqual' :
            return Object.assign({}, JSON.parse(JSON.stringify(state)), action.data);
        default :
            return state;
    }
}

// 导出所有reducer
export default combineReducers({
    tabTo,
    listMethods,
    calculatorMethods
})