import React, {Component} from 'react';
import Trade from './Trade';

class TradeList extends Component {
    render(){
        let {trades} = this.props;
        let renderTrades = () => {
            return trades.map((trade) => {
                return (
                    <Trade key={trade.name+trade.q} {...trade}/>
                )
            })
        }

        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Company</th>
                            <th>Quantity</th>
                            <th>Price Paid</th>
                            <th></th>
                        </tr>
                        {renderTrades()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TradeList
