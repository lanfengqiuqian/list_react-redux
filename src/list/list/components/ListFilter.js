import React from 'react'

class ListFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 过滤页数方法
    filter_page = (event) => {
        console.log("2232",event.target.value)
        let tmp = event.target.value;
        // 设置显示条数,并且重新渲染数据
        this.props.mySetState({
            num: parseInt(tmp)
        }, this.props.getAll)

    }    

    render() {
        return (
            <div className="filter">
                {/* <!-- 类型过滤 --> */}
                <select>
                    <option>交易</option>
                    <option>非交易</option>
                </select>
                {/* <!-- /类型过滤 --> */}
                {/* <!-- 分页过滤 --> */}
                <select className="page_filter" id="page" onChange={this.filter_page}>
                    <option value="15" >15</option>
                    <option value="10">10</option>
                    <option value="8">8</option>
                    <option value="5">5</option>
                </select>
                {/* <!-- /分页过滤 --> */}
                {/* <!-- 日期过滤 --> */}
                日期选择
                <input type="date" />
                -
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

        )
    }
}

export default ListFilter;