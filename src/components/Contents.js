import React, { Component } from 'react';

class Contents extends Component {
    render() {
        return (
            <section>
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
            </section>
        );
    }
}

export default Contents;