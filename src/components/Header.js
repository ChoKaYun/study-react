import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <h1><a href="/">{this.props.title}</a></h1>
                <p>{this.props.sub}</p>
            </header>
        );
    }
}

export default Header;