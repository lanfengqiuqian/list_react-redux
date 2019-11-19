import React from 'react'
import { connect } from 'react-redux'

import { filterPage, getAll } from '../../../../store/actions'

class ListFilter extends React.Component {
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
                <select className="pageFilter" id="page" onChange={this.props.filterPage}>
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

const mapStateToProps = (state, ownProps) => {
    return {
        currentPage: state.listMethods.currentPage,
        num: state.listMethods.num,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        filterPage: (e) => {
            dispatch(filterPage(e.target.value));
            getAll()();
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListFilter);