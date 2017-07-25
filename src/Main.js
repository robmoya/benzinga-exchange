import React, { Component } from 'react';
import Nav from './components/Nav';
import Stock from './components/Stock';
import Portfolio from './components/Portfolio';

class Main extends Component {
    render() {
        return (
            <div className="app">
                <Nav/>
                <Stock/>
                <Portfolio/>
            </div>

        )
    }
}

export default Main;
