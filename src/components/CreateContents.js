import React, { Component } from 'react';

class CreateContents extends Component {
    render() {
        return (
            <section>
                <h2>Create Content</h2>
                <form action="/create_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(e.target.title.value, e.target.desc.value);
                    }.bind(this)}
                >
                    <div><input type="text" name="title" placeholder="title"></input></div>
                    <div><textarea name="desc" placeholder="description"></textarea></div>
                    <div><button type="submit">submit</button></div>
                </form>
            </section>
        );
    }
}

export default CreateContents;