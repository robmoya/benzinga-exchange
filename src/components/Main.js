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
                {name:'Ford Motor',q:20,ppaid:14.99},
                {name:'General Electric',q:10,ppaid:20.00},
                {name:'Microsoft',q:10,ppaid:20.00}
            ]
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
        let cashTraded;
        if (tradeType === 'buy') {
            console.log('fue buy');
        } else if (tradeType === 'sell'){
            console.log('fue sell');
        }

        if (this.state.symbol.length > 0 && quantity.length > 0){
            this.setState({
                cash: this.state.cash - (this.state.askPrice * quantity),
                trades: [
                    ...this.state.trades,
                    {
                        name: this.state.name,
                        q: quantity,
                        ppaid: this.state.askPrice
                    }
                ]
            })
        }else{
            alert("Please select a Stock First")
        }

    },
    render() {
        let {name,symbol,bidPrice,askPrice,cash,trades} = this.state;
        return (
            <div className="app">
                <Nav onSearch={this.handleSearch}/>
                <Stock symbol={symbol} bidPrice={bidPrice} askPrice={askPrice} name={name} onAddTrade={this.handleAddTrade}/>
                <Portfolio cash={cash} trades={trades}/>
            </div>

        )
    }
})

export default Main;
