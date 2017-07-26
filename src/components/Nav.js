import React, {Component} from 'react';
import SymbolForm from './SymbolForm';

class Nav extends Component {
    handleSearch(symbol){
        this.props.onSearch(symbol)
    }
    render(){
        return(
            <div>
                <p>Simple Stock Exchange</p>
                <SymbolForm onSearch={this.handleSearch.bind(this)}/>
            </div>
        )
    }
}

export default Nav;
