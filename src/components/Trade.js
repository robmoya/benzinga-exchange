import React, {Component} from 'react';

class Trade extends Component {

    render(){
        let {name,q,ppaid} = this.props;
        return(
            <tr>
                <td>{name}</td>
                <td>{q}</td>
                <td>{ppaid}</td>
                <td><button>View Stock</button></td>
            </tr>
        )
    }
}

export default Trade
