import React, { Component } from 'react';

class Nav extends Component {
    shouldComponentUpdate(newProps, newState) {
        // console.log('nav shouldComponentUpdate', newProps, this.props.data);
        if(newProps === this.props.data) {
            return false;
        }
        return true;
    }
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a
                        href={"content/" + data[i].id}
                        data-id = {data[i].id}
                        onClick={function(id, e) {
                            e.preventDefault();
                            this.props.onChangeContent(id);
                        }.bind(this, data[i].id)}
                    >{data[i].title} :: {data[i].desc}</a>
                </li>
            );
            i++;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default Nav;