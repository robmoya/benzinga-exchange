import React from 'react';
import createReactClass from 'create-react-class';

import Nav from './Nav';
import Stock from './Stock';
import Portfolio from './Portfolio';
import benzingaStockApi from '../api/benzingaStockApi';

// This is where the state goes


const Main = createReactClass({
    getInitialState(){
        return {
            name: 'Stock Name',
            symbol: '',
            bidPrice: '',
            askPrice: '',
            cash: 100000,
            trades: [
                {name:'ford',q:1,ppaid:12},
                {name:'general electric',q:23,ppaid:15}
            ]
        }
    },
    handleSearch(symb){
        let symbUppercase = symb.toUpperCase();
        benzingaStockApi.getStock(symbUppercase).then((stock) => {
            this.setState(stock)
        }).catch((error) => {
            console.log("Api call error");
            alert(error.message);
        })
    },
    render() {
        let {name,symbol,bidPrice,askPrice,cash,trades} = this.state;
        return (
            <div className="app">
                <Nav onSearch={this.handleSearch}/>
                <Stock symbol={symbol} bidPrice={bidPrice} askPrice={askPrice} name={name}/>
                <Portfolio cash={cash} trades={trades}/>
            </div>

        )
    }
})

export default Main;
