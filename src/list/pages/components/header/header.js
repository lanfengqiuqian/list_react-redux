import React from 'react'

class Header extends React.Component {

    render() {
        return (
            <div className="title">
                <span id="flag">每天进步一点点,离目标更近一点点!</span>
                <span id="logout">退出</span>
                <span id="username">段惠乾</span>
            </div>
        );
    }
}

export default Header;