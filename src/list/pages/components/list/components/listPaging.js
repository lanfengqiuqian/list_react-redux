import React from 'react'
import { connect } from 'react-redux'

// 导入actions
import { nextPage, lastPage, getAll } from '../../../../store/actions'


class ListPaging extends React.Component {
    render() {
        return (
            <div className="paging">
                <div className="wrapper">
                    <span id="lastPage" onClick={this.props.lastPage}>上一页</span>
                    <span id="currentPage">{this.props.currentPage}</span>
                    <span>/</span>
                    <span id="totalPages">{Math.ceil(256 / this.props.num)}</span>
                    <span id="nextPage" onClick={this.props.nextPage}>下一页</span>
                </div>
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
        nextPage: () => {
            dispatch(nextPage());
            getAll()();
        },
        lastPage: () => {
            dispatch(lastPage());
            getAll()();
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListPaging);