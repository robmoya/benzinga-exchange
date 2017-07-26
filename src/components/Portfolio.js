import React, {Component} from 'react';

class Portfolio extends Component {
    render(){
        return(
            <div>
                <h2>Current Portfolio</h2>
                <h3>Cash: $<strong>100,000.00</strong></h3>
                <table>
                    <tbody>
                        <tr>
                            <th>Company</th>
                            <th>Quantity</th>
                            <th>Price Paid</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Ford Motor</td>
                            <td>20</td>
                            <td>14.99</td>
                            <td><button>View Stock</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Portfolio;
