// 存放默认值
let initialState = {
    // 控制计算器和列表的显示和隐藏
    isList: false,
    // 通过类名控制nav的css样式
    navCssCalculator: "current",
    navCssList: "",
    // 当前页
    currentPage: 1,
    // 一页显示条数
    num: 15,
    // 列表数据
    listItems: [],
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
    // 控制模态框的透明度
    opacity: 1,
}

export default initialState