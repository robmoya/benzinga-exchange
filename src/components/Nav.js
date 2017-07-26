import React, {Component} from 'react';
import SymbolForm from './SymbolForm';

class Nav extends Component {
    render(){
        return(
            <div>
                <p>Simple Stock Exchange</p>
                <SymbolForm/>
            </div>
        )
    }
}

export default Nav;
