import React, { Component } from 'react';
import { StyledFooter } from '../../../styled/StyledFooter';
import { StyledIconFooter } from '../../../styled/StyledIcon';
//Importing Icons
import PrevIcon from '../../../static/imgs/icons/PrevIcon';
import NextIcon from '../../../static/imgs/icons/NextIcon';

class FooterLayout extends Component {
    render() {
        return (
            <StyledFooter>
                <PrevIcon />
                <NextIcon />
            </StyledFooter>
        );
    }
}

export default FooterLayout;