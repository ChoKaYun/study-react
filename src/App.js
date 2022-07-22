import React, { Component } from 'react';
// import Header from './components/Header';
import Nav from './components/Nav';
import Contents from './components/Contents';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'read',
            welcom: {title: 'Welcom', desc: 'welcom contents'},
            headerconts: {title: 'WEB', sub: 'world wide web'},
            navlist: [
                {id:1, title:'HTML', desc:'HTML is for information'},
                {id:2, title:'CSS', desc:'HTML is for information'},
                {id:3, title:'JavaScript', desc:'HTML is for information'}
            ],
            contents: {title:'HTML', desc: 'HTML is HyperText Markup Langguage'},
        }
    }
    render() {
        var _title, _desc = null;
        if (this.state.mode === 'welcom') {
            _title = this.state.welcom.title;
            _desc = this.state.welcom.desc;
        } else if (this.state.mode === 'read') {
            _title = this.state.navlist[0].title;
            _desc = this.state.navlist[0].desc;
        }
        return (
            <div className="App">
                {/* <Header title="WEB" sub="world wide web"></Header> */}
                <header>
                    <h1><a href="/" onClick={function(e){
                        e.preventDefault();
                        // this.state.mode = "welcom";
                        this.setState({ mode: "welcom" });
                    }.bind(this)}>{this.state.headerconts.title}</a></h1>
                    <p>{this.state.headerconts.sub}</p>
                </header>
                <Nav data={this.state.navlist}></Nav>
                <Contents
                    title={_title}
                    desc={_desc}>
                </Contents>
                <Contents desc="2번째 text만 하면?"></Contents>
            </div>
        );
    }
}

export default App;