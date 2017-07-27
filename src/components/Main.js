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
let Cash = JSON.parse(localStorage.getItem('totalCash')) || 100000;


const Main = createReactClass({
    getInitialState(){
        return {
            name: 'Stock Name',
            symbol: '',
            bidPrice: '',
            askPrice: '',
            totalCash: Cash,
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
        // Buy or Sell modifies your total Cash
        let calcCash;
        let totalCash = Number(this.state.totalCash);
        let askPrice = this.state.askPrice;
        let bidPrice = this.state.bidPrice;
        console.log(`TotalCash: ${totalCash}, AskPrice: ${askPrice}, BidPrice: ${bidPrice}`);
        if (tradeType === 'buy') {
            calcCash = totalCash - (askPrice * quantity);
            console.log(`Buy amount: -${askPrice * quantity}`);
        } else if (tradeType === 'sell'){
            calcCash = totalCash + (bidPrice * quantity);
            console.log(`Sell amount: +${bidPrice * quantity}`);
        }

        // Check if wallet is empty or negative and return
        if (calcCash < 0) {
            alert("You don't have enough money");
            console.log(calcCash);
            return;
        }

        // Add New Trade Object into Trades Array
        let newTrade = {
            id: uuid(),
            name: this.state.name,
            q: quantity,
            ppaid: this.state.askPrice,
            symbol: this.state.symbol
        }
        let trades = [...this.state.trades, newTrade];

        // If a symbol and a quantity were selected, add trade to State and localstorage
        if (this.state.symbol.length > 0 && quantity.length > 0){
            this.setState({
                totalCash: calcCash,
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
