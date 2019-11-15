import React, { Component } from 'react';
import { StyledCard,StyledFlexContainer,StyledText } from '../../../styled/StyledOrderCard';
//Importing Elements
import LabelOrderStatus from '../../Elements/LabelOrderStatus/LabelOrderStatus';

export default class OrderCard extends Component {
    render() {
        return (
            <StyledFlexContainer>
                <StyledCard>
                   <p>1</p>
                   <p>2</p>
                <LabelOrderStatus status="OPEN" text="Aberto"/>
                </StyledCard>
            </StyledFlexContainer>
        );
    }
}
