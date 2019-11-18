import React from 'react'

class ListPaging extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 下一页方法
    nextPage = () => {
        // 总页数
        let totalPages = Math.ceil(256 / this.props.payload.currentPage);
        // 判断边界
        if(this.props.payload.currentPage < totalPages) {
            // 当前页数加一
            this.props.mySetState({
                currentPage: this.props.payload.currentPage + 1,
            })
            // 重新渲染数据
            this.props.getAll();
        }
    }

    // 上一页方法
    lastPage = () => {
        // 判断边界
        if(this.props.payload.currentPage > 1) {
            // 当前页数加一
            this.props.mySetState({
                currentPage: this.props.payload.currentPage - 1,
            })
            // 重新渲染数据
            this.props.getAll();
        }
    }

    render() {
        return (
            <div className="paging">
                <div className="wrapper">
                    <span id="lastPage" onClick={this.lastPage}>上一页</span>
                    <span id="currentPage">{this.props.payload.currentPage}</span>
                    <span>/</span>
                    <span id="totalPages">{Math.ceil(256 / this.props.payload.num)}</span>
                    <span id="nextPage" onClick={this.nextPage}>下一页</span>
                </div>
            </div>
        )
    }
}

export default ListPaging;