import React from 'react'

// 导入子组件
import ListPaging from './components/listPaging';
import ListFilter from './components/listFilter'

class ListPortion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 查询到的列表数据
            lists: [],
            // 当前页
            currentPage : 1,
            // 一页显示条数
            num: 15,
            listItems: [],
        }
    }

    // 组件已经渲染到DOM后运行
    componentDidMount() {
        this.getAll();
    }

    // 查询所有数据方法

    getAll = () => {
        // 固定this指向,避免后面then的多重嵌套指向错误
        let that = this;
        // 参数拼接到地址栏
        let { currentPage, num } = that.state;
        let url = 'http://pre.zhushang.net/Supplychain/getDataForHavePost?type=1&page='+currentPage+'&num='+num;
        fetch(url)
        .then(function(response) {
            // 判断查询到的数据是否异常
            if(response.status === 200){
                return response.json();
            } else {
                alert("查询异常")
            }
        })
        .then(function(myJson) {
            // 列表渲染
            let items = myJson.map(item => {
                return (
                    <tr key={item.id}>
                        <td id="customerId">{item.id}</td>
                        <td>{item.create_time}</td>
                        <td>{item.pay_money}(元)</td>
                        <td>{item.openid}</td>
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.user_where}</td>
                        <td>{item.package}</td>
                        <td>{item.order_no}</td>
                        <td>{item.expire_date}</td>
                        <td>{item.phone}</td>
                        <td>{item.zihao}</td>
                        <td>{item.account}</td>
                        <td>{item.password}</td>
                        <td id="origin">分析</td>
                    </tr>
                )
            })
            that.setState({
                listItems: items
            })
        })        
    }

    // 修改状态方法,obj为需要修改的属性,foo为需要执行的回调函数
    mySetState = (obj, foo) => {
        this.setState(obj, foo);
    }

    render() {
        return (
            <div className="list">
                {/* 过滤部分 */}
                <ListFilter payload={this.state} getAll={this.getAll} mySetState={this.mySetState} />
                {/* /过滤部分 */}
                {/* 表格部分 */}
                <div className="table">
                    {/* 表格主体部分 */}
                    <table>
                        <thead className="thead">
                            <tr>
                                <th>客户id</th>
                                <th>创建时间</th>
                                <th>花费(元)</th>
                                <th>开放id</th>
                                <th>姓名</th>
                                <th>类型</th>
                                <th>用户地址</th>
                                <th>包</th>
                                <th>订单号</th>
                                <th>终止时间</th>
                                <th>电话</th>
                                <th>字号</th>
                                <th>说明</th>
                                <th>密码</th>
                                <th>来源</th>
                            </tr>
                        </thead>
                        <tbody>{this.state.listItems}</tbody>
                    </table>
                    {/* /表格主体部分 */}
                    {/* 分页部分 */}
                    <ListPaging payload={this.state} getAll={this.getAll} mySetState={this.mySetState} />
                    {/* /分页部分 */}
                </div>
                {/* /表格部分 */}
            </div>
        );
    }
}

export default ListPortion;