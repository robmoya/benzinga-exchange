import React, {Component} from 'react';
import SymbolForm from './SymbolForm';
import {Panel, Label, FormControl, Row, Col, Button, InputGroup, Form} from 'react-bootstrap';

let tradeT;

class Stock extends Component {
    handleSearch(symbol){
        this.props.onSearch(symbol);
    }
    getTradeType(e){
        tradeT = e.target.name;
    }
    handleSubmit(e){
        e.preventDefault();
        // let tradeQ = this.refs.quantity.value;
        let tradeQ = this.quantity.value;

        if (tradeQ.length > 0) {
            // this.refs.quantity.value = '';
            this.quantity.value = '';
            this.props.onAddTrade(tradeQ,tradeT);
        } else {
            alert("Please select a QUANTITY to sell or buy first");
            // this.refs.quantity.focus();
            this.quantity.value = '';
        }
    }
    renderBuySellForm(){
        return(
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <InputGroup>
                    {/*<FormControl
                        type="number"
                        placeholder="Enter Quantity"
                        ref="quantity"/>*/}
                    <FormControl
                        type="number"
                        placeholder="Enter Quantity"
                        inputRef={(ref) => {this.quantity = ref}}/>
                    <InputGroup.Button>
                        <Button name="buy" type="submit" onClick={this.getTradeType}>Buy</Button>
                    </InputGroup.Button>
                    <InputGroup.Button>
                        <Button name="sell" type="submit" onClick={this.getTradeType}>Sell</Button>
                    </InputGroup.Button>
                </InputGroup>
            </Form>
        )
    }
    renderStock(name,symbol,askPrice,bidPrice){
        let symb = this.props.symbol;
        if(symb !== ''){
            return (
                    <Panel>
                        <Row>
                            <Col xs={6}>
                                <h2>{name} {symbol}</h2>
                                <h3>
                                    <Label>Bid {bidPrice}</Label> <Label>Ask {askPrice}</Label>
                                </h3>
                            </Col>
                            <Col xs={6}>
                                {this.renderBuySellForm()}
                            </Col>
                        </Row>
                    </Panel>
                )
        }
    }

    render(){
        let {name,symbol,askPrice,bidPrice} = this.props;

        return(
            <div>
                <SymbolForm onSearch={this.handleSearch.bind(this)} />
                <br/>
                {this.renderStock(name,symbol,askPrice,bidPrice)}
            </div>
        )
    }
}

export default Stock;
