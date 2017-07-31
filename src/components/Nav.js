import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';


class Nav extends Component {
    render(){
        return(
            <Navbar className="text-center">
                <h1 className="h2">Simple Stock Exchange</h1>
            </Navbar>
        )
    }
}

export default Nav;
