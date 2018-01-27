import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import {echo} from './actions/echo'
import {serverMessage} from './reducers/echo'



class App extends Component {
    componentDidMount() {
        this.props.fetchMessage('Hello!!!')
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
  }
}

export default connect(
    state => ({ message: serverMessage(state) }),
    { fetchMessage: echo }
)(App)
