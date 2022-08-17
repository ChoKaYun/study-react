import React, { Component } from 'react';

class UpdateContents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        };
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        return (
            <section>
                <h2>Update Content</h2>
                <form action="/update_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(
                            this.state.id,
                            this.state.title,
                            this.state.desc
                        );
                    }.bind(this)}
                >
                    <input type="hidden" name="id" value={this.state.id}></input>
                    <div>
                        <input type="text" name="title" placeholder="title"
                            value={this.state.title}
                            onChange={this.inputHandler}
                        ></input>
                    </div>
                    <div>
                        <textarea name="desc" placeholder="description"
                            value={this.state.desc}
                            onChange={this.inputHandler}
                        ></textarea>
                    </div>
                    <div>
                        <button type="submit">submit</button>
                    </div>
                </form>
            </section>
        );
    }
}

export default UpdateContents;