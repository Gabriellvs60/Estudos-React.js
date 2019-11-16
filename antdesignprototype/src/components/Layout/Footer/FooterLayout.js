import React, { Component } from 'react';
import { StyledFooter } from '../../../styled/StyledFooter';
import { StyledIconFooter } from '../../../styled/StyledIcon';
//Importing Icons
import PrevIcon from '../../../static/imgs/icons/PrevIcon';
import NextIcon from '../../../static/imgs/icons/NextIcon';
import previous from '../../../static/imgs/icons/previous.png';

class FooterLayout extends Component {
    render() {
        return (
            <StyledFooter>
                 <StyledIconFooter src={'../../../static/imgs/icons/previous.png'} />
                <NextIcon/>
            </StyledFooter>
        );
    }
}

export default FooterLayout;