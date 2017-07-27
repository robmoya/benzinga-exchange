import React from 'react';
import createReactClass from 'create-react-class';

import Nav from './Nav';
import Stock from './Stock';
import Portfolio from './Portfolio';
import benzingaStockApi from '../api/benzingaStockApi';
import uuid from 'uuid';


// This is where the state goes

let trades = JSON.parse(localStorage.getItem('tradesList')) || [
    {id: uuid(), name:'Ford Motor',q:20,ppaid:14.99, symbol:'F'},
    {id: uuid(), name:'General Electric',q:10,ppaid:20.00, symbol:'GE'},
    {id: uuid(), name:'Microsoft',q:10,ppaid:20.00, symbol:'MSFT'}
];
let totalCash = JSON.parse(localStorage.getItem('totalCash')) || 100000;

console.log(trades);


const Main = createReactClass({
    getInitialState(){

        return {
            name: 'Stock Name',
            symbol: '',
            bidPrice: '',
            askPrice: '',
            totalCash: totalCash,
            trades: trades
        }
    },

    handleSearch(search){
        let searchUppercase = search.toUpperCase();
        benzingaStockApi.getStock(searchUppercase).then((stock) => {
            this.setState(stock)
        }).catch((error) => {
            console.log("Api call error");
            alert(error.message);
        })
    },
    handleAddTrade(quantity,tradeType){
        let totalCash;
        if (tradeType === 'buy') {
            totalCash = this.state.totalCash - (this.state.askPrice * quantity);
        } else if (tradeType === 'sell'){
            totalCash = this.state.totalCash + (this.state.bidPrice * quantity);
        }

        let newTrade = {
            id: uuid(),
            name: this.state.name,
            q: quantity,
            ppaid: this.state.askPrice,
            symbol: this.state.symbol
        }
        let trades = [...this.state.trades, newTrade];

        if (this.state.symbol.length > 0 && quantity.length > 0){
            this.setState({
                totalCash: totalCash,
                trades: trades
            });
            localStorage.setItem('tradesList', JSON.stringify(trades));
            localStorage.setItem('totalCash', JSON.stringify(totalCash));
        }else{
            alert("Please select a Stock First")
        }

    },
    render() {
        let {name,symbol,bidPrice,askPrice,totalCash,trades} = this.state;
        return (
            <div className="app">
                <Nav onSearch={this.handleSearch}/>
                <Stock symbol={symbol} bidPrice={bidPrice} askPrice={askPrice} name={name} onAddTrade={this.handleAddTrade}/>
                <Portfolio totalCash={totalCash} trades={trades} onSearch={this.handleSearch}/>
            </div>

        )
    }
})

export default Main;
