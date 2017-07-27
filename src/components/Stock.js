import React, {Component} from 'react';

let tradeT;

class Stock extends Component {
    getTradeType(e){
        tradeT = e.target.name;
    }
    handleSubmit(e){
        e.preventDefault();
        let tradeQ = this.refs.quantity.value;

        if (tradeQ.length > 0) {
            this.refs.quantity.value = '';
            this.props.onAddTrade(tradeQ,tradeT);
        } else {
            alert("Please select a Quantity to sell or buy first")
            this.refs.quantity.focus();
        }
    }
    render(){
        let {name,symbol,askPrice,bidPrice} = this.props;
        return(
            <div>
                <h2>{name} ({symbol})</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Bid</th>
                            <th>Ask</th>
                        </tr>
                        <tr>
                            <td>{bidPrice}</td>
                            <td>{askPrice}</td>
                        </tr>
                    </tbody>
                </table>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="Enter Quantity" ref="quantity"/>
                    <button name="buy" onClick={this.getTradeType}>Buy</button>
                    <button name="sell" onClick={this.getTradeType}>Sell</button>
                </form>
            </div>
        )
    }
}

export default Stock;
