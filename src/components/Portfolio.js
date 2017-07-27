import React, {Component} from 'react';
import TradeList from './TradeList';


class Portfolio extends Component {
    handleSearch(search){
        this.props.onSearch(search)
    }
    render(){
        let {totalCash,trades} = this.props;

        return(
            <div>
                <h2>Current Portfolio</h2>
                <h3>Cash: $<strong>{totalCash}</strong></h3>
                <TradeList trades={trades} onSearch={this.handleSearch.bind(this)}/>
            </div>
        )
    }
}

export default Portfolio;
