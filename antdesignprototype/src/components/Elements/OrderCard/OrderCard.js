import React, { Component } from 'react';
import { StyledCard,StyledFlexContainer,StyledContentCard, StyledMarkerType } from '../../../styled/StyledOrderCard';
//Importing Elements
import LabelOrderStatus from '../../Elements/LabelOrderStatus/LabelOrderStatus';

export default class OrderCard extends Component {
    render() {
        return (
            <StyledFlexContainer>
                <StyledCard >
               <StyledContentCard>
                   <StyledMarkerType backgroundcolor="blue"/>
                   <h1>Impressão</h1>
                   <h1>João Silva</h1>
                   <h1>R$ 12.00</h1>
                   <h1>previsão:</h1>
               <LabelOrderStatus status="OPEN" text="ABERTO"/>
               </StyledContentCard>
                </StyledCard>
            </StyledFlexContainer>
        );
    }
}
