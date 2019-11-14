import React, { Component } from 'react';
import { Card } from 'antd';
//Importing Elements
import LabelOrderStatus from '../../Elements/LabelOrderStatus/LabelOrderStatus';

const text = "Entregue";

export default class OrderCard extends Component {
    render() {
        return (
            <Card style={{ width: 300 }}>
                <div><LabelOrderStatus status="OPEN" text="Aberto" /></div>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        );
    }
}
