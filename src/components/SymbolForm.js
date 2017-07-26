import React, {Component} from 'react';

class SymbolForm extends Component {
    render(){
        return(
            <div>
                <form>
                    <input type="text" placeholder="Enter Symbol"/>
                    <button>Lookup</button>
                </form>
            </div>
        )
    }
}

export default SymbolForm;
