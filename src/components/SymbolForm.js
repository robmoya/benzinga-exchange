import React, {Component} from 'react';
import {InputGroup,FormControl, Button} from 'react-bootstrap';

class SymbolForm extends Component {
    onFormSubmit(e){
        e.preventDefault();

        // let symbol = this.refs.symbol.value;
        let symbol = this.symbol.value;

        if (symbol.length > 0) {
            // this.refs.symbol.value = '';
            this.symbol.value = '';
            this.props.onSearch(symbol);
        }
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit.bind(this)} >
                <InputGroup>
                    {/*<input type="text" ref="symbol" placeholder="Enter Symbol"/>*/}
                    <FormControl
                        type="text"
                        placeholder="Enter Symbol"
                        inputRef={(ref) => {this.symbol = ref}}
                        />
                    <InputGroup.Button>
                        <Button>Lookup</Button>
                    </InputGroup.Button>
                </InputGroup>

            </form>
        )
    }
}

export default SymbolForm;
