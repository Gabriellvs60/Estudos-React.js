import React, { Component } from 'react';
//Importing Graphos Logo
import logo from '../../../static/imgs/logo.png';
//Styled Components
import { StyledDivLogo, StyledImgLogo, StyledLabelUsername, StyledIcon } from '../../../styled/StyledSider';

//Importing Icons
import NotepadIcon from '../../../static/imgs/icons/NotepadIcon';
import ClientsIcon from '../../../static/imgs/icons/ClientsIcon';
import EmployeesIcon from '../../../static/imgs/icons/EmployeesIcon';
//provisório
import './style.css';

//Importing from AntDesign
import { Layout, Menu} from 'antd';
const {Sider} = Layout;

class SiderLayout extends Component {
    render() {
        return (
          <Sider trigger={null}>
          
          <StyledDivLogo>
            <StyledImgLogo src={logo}/>
            <StyledLabelUsername>Angelo Luz</StyledLabelUsername>
          </StyledDivLogo>

          <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <StyledIcon component={NotepadIcon}/>
              <span>Pedidos</span>
            </Menu.Item>
            <Menu.Item key="2">
              <StyledIcon component={ClientsIcon}/>
              <span>Clientes</span>
            </Menu.Item>
            <Menu.Item key="3">
              <StyledIcon component={EmployeesIcon}/>
              <span>Colaboradores</span>
            </Menu.Item>
          </Menu>
        </Sider>
        );
    }
}

export default SiderLayout;