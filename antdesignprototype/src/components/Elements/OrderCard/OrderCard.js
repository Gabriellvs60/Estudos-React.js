import React, { Component } from 'react';
import { StyledCard } from '../../../styled/StyledOrderCard';
//Importing Elements
import LabelOrderStatus from '../../Elements/LabelOrderStatus/LabelOrderStatus';

const text = "Entregue";

export default class OrderCard extends Component {
    render() {
        return (
            <div>
                <StyledCard style={{ width: 300 }}>
                   
                    <LabelOrderStatus status="OPEN" text="Aberto"/>
                   <p1>1</p1>
                   <p1>1</p1>
                   <p1>1</p1>
                   <p1>1</p1>
                </StyledCard>
            </div>
        );
    }
}
