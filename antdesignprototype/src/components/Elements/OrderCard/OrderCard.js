import React, { Component } from 'react';
import { 
    StyledCard,StyledFlexContainer,
    StyledContentCard, 
    StyledMarkerType,
    StyledText,
    StyledTypeServiceDiv
} from '../../../styled/StyledOrderCard';
//Importing Elements
import LabelOrderStatus from '../../Elements/LabelOrderStatus/LabelOrderStatus';

export default class OrderCard extends Component {
    render() {
        return (
            <StyledFlexContainer>
                <StyledCard >
               <StyledContentCard>
            <StyledTypeServiceDiv>
                <StyledMarkerType/>
                <p>Impressão</p>
            </StyledTypeServiceDiv>
                   <StyledText>Valor</StyledText>
                   <StyledText>Cliente</StyledText>
                   <StyledText>Atendente</StyledText>
                   <StyledText>Entrega:</StyledText>
               <LabelOrderStatus status="OPEN" text="ABERTO"/> 
               </StyledContentCard>
                </StyledCard>
            </StyledFlexContainer>
        );
    }
}
