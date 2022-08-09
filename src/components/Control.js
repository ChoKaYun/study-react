import React, { Component, useLayoutEffect } from 'react';

class Control extends Component {
    render() {
        return (
            <ul>
                <li>
                    <a href="/create"
                        onClick = {function(e) {
                            e.preventDefault();
                            this.props.onChageMode('create');
                        }.bind(this)}
                    >create</a>
                </li>
                <li>
                    <a href="/update"
                        onClick = {function(e) {
                            e.preventDefault();
                            this.props.onChageMode('update');
                        }.bind(this)}
                    >update</a>
                </li>
                <li>
                    <button type="button"
                        onClick = {function(e) {
                            e.preventDefault();
                            this.props.onChageMode('delete');
                        }.bind(this)}
                    >delete</button>
                </li>
            </ul>
        );
    }
}

export default Control;