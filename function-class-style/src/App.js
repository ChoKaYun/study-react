import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    var [funcShow, setFuncShow] = useState(true);
    var [classShow, setClassShow] = useState(true);
    return (
        <div className="container">
            <h1>Hi</h1>
            <button type="button" onClick={function(){
                setFuncShow(false);
            }}>remove Func</button>
            <button type="button" onClick={function(){
                setClassShow(false);
            }}>remove class</button>
            <FuncComp initNumber={1}></FuncComp>
            <ClassComp initNumber={1}></ClassComp>
        </div>
    );
}

var funcStyle = 'color:skyblue';
var funcId = 0;
function FuncComp(props) {
    var numberState = useState(props.initNumber);
    var number = numberState[0];
    var setNumber = numberState[1];

    // var dateState = useState((new Date()).toString());
    // var _date = dateState[0];
    // var setDate = dateState[1];
    var [_date, setDate] = useState((new Date()).toString());

    useEffect(function(){
        console.log('%cfunc -> useEffect (componentDidMount)' +(++funcId), funcStyle);
        document.title = number;
        return function(){
            console.log('%cfunc -> useEffect return (componentWillUnMount)' +(++funcId), funcStyle);
        }
    }, []);
    // side Effect
    useEffect(function(){
        console.log('%cfunc -> useEffect number (componentDidMount & componentDidUpdate)' +(++funcId), funcStyle);
        document.title = number;
        return function(){
            console.log('%cfunc -> useEffect return number (componentDidMount & componentDidUpdate)' +(++funcId), funcStyle);
        }
    }, [number]);
    useEffect(function(){
        console.log('%cfunc -> useEffect _date (componentDidMount & componentDidUpdate)' +(++funcId), funcStyle);
        document.title = _date;
        return function(){
            console.log('%cfunc -> useEffect return _date (componentDidMount & componentDidUpdate)' +(++funcId), funcStyle);
        }
    }, [_date]);

    console.log('%cfunc -> render' +(++funcId), funcStyle);
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

var classStyle = 'color:pink';
class ClassComp extends React.Component {
    state = {
        number : this.props.initNumber,
        date : (new Date()).toString()
    }
    componentWillMount() {
        console.log('%cclass -> componentWillMount', classStyle);
    }
    componentDidMount() {
        console.log('%cclass -> componentDidMount', classStyle);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('%cclass -> shouldComponentUpdate', classStyle);
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('%cclass -> componentWillUpdate', classStyle);
    }
    componentDidUpdate(nextProps, nextState) {
        console.log('%cclass -> componentDidUpdate', classStyle);
    }
    componentWillUnmount(nextProps, nextState) {
        console.log('%cclass -> componentWillUnmount', classStyle);
    }
    render() {
        console.log('%cclass -> render', classStyle);
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
