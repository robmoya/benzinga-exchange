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
                <hr/>
                <h2>Your Portfolio <small className="pull-right h4">Cash: $<strong >{totalCash}</strong></small></h2>
                <TradeList trades={trades} onSearch={this.handleSearch.bind(this)}/>
            </div>
        )
    }
}

export default Portfolio;
