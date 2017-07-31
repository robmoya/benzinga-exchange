import React, {Component} from 'react';
import {ListGroupItem,Button, Col, Row} from 'react-bootstrap';


class Trade extends Component {
    viewStock(e){
        e.preventDefault();
        let symbol = this.props.symbol;
        this.props.onSearch(symbol);
    }
    render(){
        let {name,q,ppaid} = this.props;
        return(
            <ListGroupItem>
                <Row>
                    <Col xs={3}>{name}</Col>
                    <Col xs={3}>{q}</Col>
                    <Col xs={3}>{ppaid}</Col>
                    <Col xs={3}>
                        <Button onClick={this.viewStock.bind(this)}>View Stock</Button>
                    </Col>
                </Row>
            </ListGroupItem>

        )
    }
}

export default Trade
