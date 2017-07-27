import React, {Component} from 'react';
import Trade from './Trade';

class TradeList extends Component {
    handleSearch(search){
        this.props.onSearch(search)
    }
    render(){
        let {trades} = this.props;
        let renderTrades = () => {
            return trades.map((trade) => {
                return (
                    <Trade key={trade.id} {...trade} onSearch={this.handleSearch.bind(this)}/>
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
