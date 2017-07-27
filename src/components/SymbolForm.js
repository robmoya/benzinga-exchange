import React, {Component} from 'react';

class SymbolForm extends Component {

    onFormSubmit(e){
        e.preventDefault();

        let symbol = this.refs.symbol.value;

        if (symbol.length > 0) {
            this.refs.symbol.value = '';
            this.props.onSearch(symbol);
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <input type="text" ref="symbol" placeholder="Enter Symbol"/>
                    <button>Lookup</button>
                </form>
            </div>
        )
    }
}

export default SymbolForm;
