import React, { Component } from 'react';
import styled from 'styled-components';

import OrderCard from '../../Elements/OrderCard/OrderCard';

const ContentContainer = styled.div`
  /* width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  padding: 15px 60px;
  box-shadow: 1px 1px 16px 0px rgba(0,0,0,.25); */
`

class Content extends Component {
    render() {
        return (
            <ContentContainer >
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
            </ContentContainer>
            
        );
    }
}

export default Content;