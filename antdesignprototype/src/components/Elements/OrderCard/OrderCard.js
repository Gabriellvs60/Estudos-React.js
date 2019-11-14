import React, { Component } from 'react';
import { CardOrder } from '../styles';
//Importing Elements
import LabelOrderStatus from '../../Elements/LabelOrderStatus/LabelOrderStatus';

const text = "Entregue";

export default class OrderCard extends Component {
    render() {
        return (
            <div>
                <CardOrder style={{ width: 300 }}>
                    <div><LabelOrderStatus status="OPEN" text="Aberto" /></div>
                    <p>Arte 001</p>
                    <p>R$ 12.00</p>
                    <p>Card content</p>
                </CardOrder>
            </div>
        );
    }
}
