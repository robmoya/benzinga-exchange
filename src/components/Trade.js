import React, {Component} from 'react';


class Trade extends Component {
    viewStock(e){
        e.preventDefault();
        let symbol = this.props.symbol;
        this.props.onSearch(symbol);
    }
    render(){
        let {name,q,ppaid} = this.props;
        return(
            <tr>
                <td>{name}</td>
                <td>{q}</td>
                <td>{ppaid}</td>
                <td><button onClick={this.viewStock.bind(this)}>View Stock</button></td>
            </tr>
        )
    }
}

export default Trade
