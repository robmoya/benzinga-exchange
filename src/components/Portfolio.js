import React, {Component} from 'react';
import TradeList from './TradeList';


class Portfolio extends Component {
    render(){
        let {cash,trades} = this.props;

        return(
            <div>
                <h2>Current Portfolio</h2>
                <h3>Cash: $<strong>{cash}</strong></h3>
                <TradeList trades={trades}/>
            </div>
        )
    }
}

export default Portfolio;
