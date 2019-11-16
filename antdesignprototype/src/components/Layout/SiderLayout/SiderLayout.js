import React, { Component } from 'react';
//Importing Graphos Logo
import logo from '../../../static/imgs/logo.png';
//Styled Components
import { 
  StyledSider, 
  StyledDivLogo, 
  StyledMenu, 
  StyledMenuItem, 
  StyledImgLogo, 
  StyledLabelUsername, 
  StyledIcon, 
  StyledDivLoginLogout 
} from '../../../styled/StyledSider';

//Importing Icons
import NotepadIcon from '../../../static/imgs/icons/NotepadIcon';
import ClientsIcon from '../../../static/imgs/icons/ClientsIcon';
import EmployeesIcon from '../../../static/imgs/icons/EmployeesIcon';
import KeyIcon from '../../../static/imgs/icons/KeyIcon';
import ExitIcon from '../../../static/imgs/icons/ExitIcon';

class Sider extends Component {
  render() {
    return (
      <StyledSider >
        <StyledDivLogo>
          <StyledImgLogo src={logo} />
          <StyledLabelUsername>Angelo Luz</StyledLabelUsername>
        </StyledDivLogo>
        <StyledMenu mode="inline" defaultSelectedKeys={['1']}>
          <StyledMenuItem key="1">
            <StyledIcon component={NotepadIcon} />
            <span>Pedidos</span>
          </StyledMenuItem>
          <StyledMenuItem key="2">
            <StyledIcon component={ClientsIcon} />
            <span>Clientes</span>
          </StyledMenuItem>
          <StyledMenuItem key="3">
            <StyledIcon component={EmployeesIcon} />
            <span>Colaboradores</span>
          </StyledMenuItem>
        </StyledMenu>

        <StyledDivLoginLogout>
        <StyledIcon component={KeyIcon} />
        <StyledIcon component={ExitIcon} />
        </StyledDivLoginLogout>
      </StyledSider>
      
    );
  }
}

export default Sider;