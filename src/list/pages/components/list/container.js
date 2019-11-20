import React from 'react'
import { connect } from 'react-redux'

// 导入actions
import { firstGet, getAll } from '../../../store/actions'

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
        // firstGet();
    }

    render() {
        // 列表渲染jsx
        let items = this.props.listItems.map(item => {
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
        return (
            <div className="list">
                {/* 过滤部分 */}
                <ListFilter />
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
                        <tbody>{items}</tbody>
                    </table>
                    {/* /表格主体部分 */}
                    {/* 分页部分 */}
                    <ListPaging />
                    {/* /分页部分 */}
                </div>
                {/* /表格部分 */}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        listItems: state.listMethods.listItems
    }
}

const mapDispatchToProps = {
    getAll
}

export default connect(mapStateToProps,mapDispatchToProps)(ListPortion);