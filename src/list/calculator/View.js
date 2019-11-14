import React from 'react'

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="view">
                {/* 将需要显示的数据绑定为result */}
                <span id="real_view">{this.props.payload.result}</span>
            </div>
        );
    }
}

export default View;