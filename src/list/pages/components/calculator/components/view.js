import React from 'react'
import { connect } from 'react-redux'

class View extends React.Component {
    render() {
        return (
            <div className="view">
                {/* 将需要显示的数据绑定为result */}
                <span id="realView">{this.props.result}</span>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        result: state.calculatorMethods.result
    }
}

export default connect(mapStateToProps, null)(View);