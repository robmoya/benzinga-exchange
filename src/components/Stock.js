import React, {Component} from 'react';

class Stock extends Component {
    render(){
        let {symbol,askPrice,bidPrice} = this.props;
        return(
            <div>
                <h2>Apple Computer {symbol}</h2>
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
                <form>
                    <input type="text" placeholder="Enter Quantity"/>
                    <button>Buy</button>
                    <button>Sell</button>
                </form>
            </div>
        )
    }
}

export default Stock;
