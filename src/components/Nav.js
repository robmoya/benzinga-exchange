import React, {Component} from 'react';

class Nav extends Component {
    render(){
        return(
            <div>
                <p>Simple Stock Exchange</p>
                <input type="text" placeholder="Enter Symbol"/>
                <button>Lookup</button>
            </div>
        )
    }
}

export default Nav;
