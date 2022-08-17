import React, {useState} from 'react';
import './App.css';

function App() {
    return (
        <div className="container">
            <h1>Hi</h1>
            <FuncComp initNumber={1}></FuncComp>
            <ClassComp initNumber={1}></ClassComp>
        </div>
    );
}

function FuncComp(props) {
    var numberState = useState(props.initNumber);
    var number = numberState[0];
    var setNumber = numberState[1];

    // var dateState = useState((new Date()).toString());
    // var _date = dateState[0];
    // var setDate = dateState[1];
    var [_date, setDate] = useState((new Date()).toString());

    return (
        <div className="container">
            <h2>Function</h2>
            <p>Number : {number}</p>
            <p>Date : {_date}</p>
            <button type="button" onClick={
                function() {
                    setNumber(Math.random())
                }
            }>random</button>
            <button type="button" onClick={
                function() {
                    setDate((new Date()).toString())
                }
            }>date</button>
        </div>
    );
}

class ClassComp extends React.Component {
    state = {
        number : this.props.initNumber,
        date : (new Date()).toString()
    }
    render() {
        return (
            <div className="container">
                <h2>Class</h2>
                <p>Number : {this.state.number}</p>
                <p>Date : {this.state.date}</p>
                <button type="button" onClick={
                    function() {
                        this.setState({
                            number : Math.random()
                        });
                    }.bind(this)
                }>random</button>
                <button type="button" onClick={
                    function() {
                        this.setState({
                            date : (new Date()).toString()
                        });
                    }.bind(this)
                }>date</button>
            </div>
        );
    }
}

export default App;
