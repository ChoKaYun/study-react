import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import ReadContents from './components/ReadContents';
import CreateContents from './components/CreateContents';
import UpdateContents from './components/UpdateContents';
import Control from './components/Control';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.add_id = 3;
        this.state = {
            mode: 'welcome',
            selected_id : '1',
            welcome: {title: 'Welcome', desc: 'welcome contents'},
            headerconts: {title: 'WEB', sub: 'world wide web'},
            navlist: [
                {id:1, title:'HTML', desc:'HTML is for information'},
                {id:2, title:'CSS', desc:'CSS is for Design'},
                {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
            ],
            contents: {title:'HTML', desc: 'HTML is HyperText Markup Langguage'},
        }
    }
    getReadContents() {
        var i = 0;
        while(i < this.state.navlist.length) {
            var data = this.state.navlist[i];
            if (data.id === this.state.selected_id) {
                return data;
                break;
            }
            i++;
        }
    }
    getContents() {
        var _title, _desc, _content = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _content = <ReadContents title={_title} desc={_desc}></ReadContents>;
        } else if (this.state.mode === 'read') {
            var _navContent = this.getReadContents();
            _content = <ReadContents title={_navContent.title} desc={_navContent.desc}></ReadContents>;
        } else if (this.state.mode === 'create') {
            _content = <CreateContents onSubmit={function(_title, _desc){
                this.add_id = this.add_id + 1;
                // var _navItem = this.state.navlist.concat(
                //     {id:this.add_id, title:_title, desc:_desc}
                // )
                var _navItem = Array.from(this.state.navlist);
                _navItem.push(
                    {id:this.add_id, title:_title, desc:_desc}
                );
                this.setState({
                    navlist: _navItem,
                    mode: 'read',
                    selected_id: this.add_id
                });
            }.bind(this)}></CreateContents>;
        } else if (this.state.mode === 'update') {
            var _navContent = this.getReadContents();
            _content = <UpdateContents data={_navContent}
                onSubmit={function(_id, _title, _desc) {
                    var _navItem = Array.from(this.state.navlist);
                    var i = 0;
                    while(i < _navItem.length) {
                        if(_navItem[i].id === _id) {
                            _navItem[i] = {id:_id, title:_title, desc:_desc};
                            break;
                        }
                        i++;
                    }
                    this.setState({
                        navlist: _navItem,
                        mode: 'read'
                    });
                }.bind(this)}>
            </UpdateContents>;
        }
        return _content;
    }
    render() {
        return (
            <div className="App">
                <Header
                    title={this.state.headerconts.title}
                    sub={this.state.headerconts.sub}
                    onChangeContent = {function() {
                        this.setState({mode: 'welcome'});
                    }.bind(this)}
                ></Header>
                <Nav
                    data={this.state.navlist}
                    onChangeContent = {function(id) {
                        this.setState({
                            mode: 'read',
                            selected_id: Number(id)
                        });
                    }.bind(this)}
                ></Nav>
                <Control
                    onChageMode = {function(_mode) {
                        if(_mode === 'delete') {
                            if(window.confirm('삭제할거에영?')) {
                                var _navItem = Array.from(this.state.navlist);
                                var i = 0;
                                while(i < _navItem.length) {
                                    if(_navItem[i].id === this.state.selected_id) {
                                        _navItem.splice(i,1);
                                        break;
                                    }
                                    i++;
                                }
                            }
                            this.setState({
                                mode: 'welcome',
                                navlist: _navItem
                            });
                            alert('삭제되었습니다!');
                        } else {
                            this.setState({
                                mode: _mode
                            });
                        }
                    }.bind(this)}
                ></Control>
                {this.getContents()}
            </div>
        );
    }
}

export default App;