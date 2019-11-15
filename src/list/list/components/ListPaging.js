import React from 'react'

class ListPaging extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 下一页方法
    next_page = () => {
        // 总页数
        let total_pages = Math.ceil(256 / this.props.payload.current_page);
        // 判断边界
        if(this.props.payload.current_page < total_pages) {
            // 当前页数加一
            this.props.mySetState({
                current_page: this.props.payload.current_page + 1,
            })
            // 重新渲染数据
            this.props.getAll();
        }
    }

    // 上一页方法
    last_page = () => {
        // 判断边界
        if(this.props.payload.current_page > 1) {
            // 当前页数加一
            this.props.mySetState({
                current_page: this.props.payload.current_page - 1,
            })
            // 重新渲染数据
            this.props.getAll();
        }
    }

    render() {
        return (
            <div className="paging">
                <div className="wrapper">
                    <span id="last_page" onClick={this.last_page}>上一页</span>
                    <span id="current_page">{this.props.payload.current_page}</span>
                    <span>/</span>
                    <span id="total_pages">{Math.ceil(256 / this.props.payload.num)}</span>
                    <span id="next_page" onClick={this.next_page}>下一页</span>
                </div>
            </div>
        )
    }
}

export default ListPaging;