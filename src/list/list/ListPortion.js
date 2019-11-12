import React from 'react'

// 导入子组件

class ListPortion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 查询到的列表数据
            lists: [],
            // 当前页
            current_page : 1,
            // 一页显示条数
            num: 15,
            listItems: [],
        }
        this.next_page = this.next_page.bind(this);
        this.last_page = this.last_page.bind(this);
        this.getAll = this.getAll.bind(this);
        this.filter_page = this.filter_page.bind(this);
    }

    // 组件已经渲染到DOM后运行
    componentDidMount() {
        this.getAll();
    }

    componentWillUnmount() {

    }

    // 查询所有数据方法
    getAll() {
        // 参数拼接到地址栏
        let that = this;
        let url = 'http://pre.zhushang.net/Supplychain/getDataForHavePost?type=1&page='+this.state.current_page+'&num='+this.state.num;
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
                        <td id="customer_id">{item.id}</td>
                        <td>{item.create_time}</td>
                        <td>{item.pay_money}</td>
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

    // 下一页方法
    next_page() {
        // 总页数
        let total_pages = Math.ceil(256 / this.state.current_page);
        // 判断边界
        if(this.state.current_page < total_pages) {
            // 当前页数加一
            this.setState({
                current_page: this.state.current_page + 1,
            })
            // 重新渲染数据
            this.getAll();
        }
    }

    // 上一页方法
    last_page() {
        // 判断边界
        if(this.state.current_page > 1) {
            // 当前页数加一
            this.setState({
                current_page: this.state.current_page - 1,
            })
            // 重新渲染数据
            this.getAll();
        }
    }

    // 过滤页数方法
    filter_page(event) {
        // 设置显示条数,并且重新渲染数据
        this.setState({num: parseInt(event.target.value)},() => {
            this.getAll();
        })
    }
    
    render() {
        return (
            <div className="list">
                {/* 过滤部分 */}
                <div className="filter">
                    {/* <!-- 类型过滤 --> */}
                    <select>
                        <option>交易</option>
                        <option>非交易</option>
                    </select>
                    {/* <!-- /类型过滤 --> */}
                    {/* <!-- 分页过滤 --> */}
                    <select className="page_filter" id="page" onChange={this.filter_page}>
                        <option value="15">15</option>
                        <option value="10">10</option>
                        <option value="8">8</option>
                        <option value="5">5</option>
                    </select>
                    {/* <!-- /分页过滤 --> */}
                    {/* <!-- 日期过滤 --> */}
                    日期选择
                    <input type="date" />
                    <input type="date" />
                    {/* <!-- /日期过滤 --> */}
                    {/* <!-- 查询 --> */}
                    <button id="search">查询</button>
                    {/* <!-- /查询 --> */}
                    {/* <!-- 同步 --> */}
                    <button>同步</button>
                    {/* <!-- /同步 --> */}
                    <span>交易上次手动同步时间: 2019-09-25 10:09:36</span>
                </div>
                {/* /过滤部分 */}
                {/* 表格部分 */}
                <div className="table">
                    {/* 表格主体部分 */}
                    <table>
                        <thead className="thead">
                            <tr>
                                <th>客户id</th>
                                <th>创建时间</th>
                                <th>花费</th>
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
                    <div className="paging">
                        <div className="wrapper">
                            <span id="last_page" onClick={this.last_page}>上一页</span>
                            <span id="current_page">{this.state.current_page}</span>
                            <span>/</span>
                            <span id="total_pages">{Math.ceil(256 / this.state.num)}</span>
                            <span id="next_page" onClick={this.next_page}>下一页</span>
                        </div>
                    </div>
                    {/* /分页部分 */}
                </div>
                {/* /表格部分 */}
            </div>
        );
    }
}

export default ListPortion;