import React from 'react';
import PropTypes from 'prop-types';
import logo from './robot.svg';
import './App.css';

import Login from './containers/LoginPage'

const App = props =>(
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Hệ thống quản lý sản phẩm</h2>
        </div>
        <section className="App-body">
            {props.children}
        </section>
    </div>
)

App.propTypes = {
    children: PropTypes.node,
}

export default App;