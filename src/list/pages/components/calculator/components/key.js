import React from 'react'
import { connect } from 'react-redux'

import { joint, clear, percent, reverse, operation } from '../../../../store/actions'

class Key extends React.Component {
    render() {
        return (
            <div className="key">
                <div onClick={this.props.clear}>AC</div>
                <div onClick={() => this.props.reverse()}>+/-</div>
                <div onClick={() => this.props.percent()}>%</div>
                <div onClick={() => this.props.operation("/")}>÷</div>
                <div onClick={() => this.props.joint("7")}>7</div>
                <div onClick={() => this.props.joint("8")}>8</div>
                <div onClick={() => this.props.joint("9")}>9</div>
                <div onClick={() => this.props.operation("*")}>x</div>
                <div onClick={() => this.props.joint("4")}>4</div>
                <div onClick={() => this.props.joint("5")}>5</div>
                <div onClick={() => this.props.joint("6")}>6</div>
                <div onClick={() => this.props.operation("-")}>-</div>
                <div onClick={() => this.props.joint("1")}>1</div>
                <div onClick={() => this.props.joint("2")}>2</div>
                <div onClick={() => this.props.joint("3")}>3</div>
                <div onClick={() => this.props.operation("+")}>+</div>
                <div onClick={() => this.props.joint("0")}>0</div>
                <div onClick={() => this.props.joint(".")}>.</div>
                <div onClick={() => this.props.operation("=")}>=</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        joint: (str) => {
            dispatch(joint(str));
        },
        clear: () => {
            dispatch(clear());
        },
        percent: () => {
            dispatch(percent());
        },
        reverse: () => {
            dispatch(reverse());
        },
        operation: (ope) => {
            operation(ope);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Key);

