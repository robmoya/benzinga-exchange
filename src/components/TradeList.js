import React, {Component} from 'react';
import Trade from './Trade';
import {ListGroup,Col,Row, ListGroupItem} from 'react-bootstrap';

class TradeList extends Component {
    handleSearch(search){
        this.props.onSearch(search)
    }
    render(){
        let {trades} = this.props;
        let renderTrades = () => {
            return trades.map((trade) => {
                return (
                    <Trade key={trade.id} {...trade} onSearch={this.handleSearch.bind(this)}/>
                )
            })
        }

        return(
            <ListGroup>
                <ListGroupItem>
                    <Row>
                        <Col xs={3}>Company</Col>
                        <Col xs={3}>Quantity</Col>
                        <Col xs={3}>Price Paid</Col>
                        <Col xs={3}></Col>
                    </Row>
                </ListGroupItem>
                {renderTrades()}
            </ListGroup>

        )
    }
}

export default TradeList
