import React from 'react';
import createReactClass from 'create-react-class';

import Nav from './Nav';
import Stock from './Stock';
import Portfolio from './Portfolio';

// This is where the state goes

const Main = createReactClass({
    getInitialState(){
        return {
            symbol: 'F',
            bidPrice: 12.23,
            askPrice: 12.23,
            cashAvail: 100000,
            trades: [{q:1,ppaid:14.99},{q:10,ppaid:12.99}]
        }
    },
    handleSearch(symbol){
        // this.setState({
        //     symbol : symbol,
        //     bidPrice : 12.23,
        //     askPrice : 12.23
        // })
    },
    render() {
        let {symbol,bidPrice,askPrice, cashAvail} = this.state;
        return (
            <div className="app">
                <Nav onSearch={this.handleSearch}/>
                <Stock symbol={symbol} bidPrice={bidPrice} askPrice={askPrice}/>
                <Portfolio cashAvail={cashAvail}/>
            </div>

        )
    }
})

export default Main;
