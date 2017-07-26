import React, {Component} from 'react';

class Stock extends Component {
    render(){
        return(
            <div>
                <h2>Apple Computer (AAPL)</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Bid</th>
                            <th>Ask</th>
                        </tr>
                        <tr>
                            <td>500.00</td>
                            <td>505.00</td>
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
