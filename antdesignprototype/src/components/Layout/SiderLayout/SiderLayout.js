import React, { Component } from 'react';
//Importing Graphos Logo
import logo from '../../../static/imgs/logo.png';
//Importing Icons
import NotepadIcon from '../../../static/imgs/icons/NotepadIcon';
import ClientsIcon from '../../../static/imgs/icons/ClientsIcon';
import EmployeesIcon from '../../../static/imgs/icons/EmployeesIcon';
//Importing from AntDesign
import { Layout, Menu, Icon } from 'antd';
const {Sider} = Layout;

class SiderLayout extends Component {
    render() {
        return (
          <Sider trigger={null}>
          <div className="logo">
            <img src={logo}/>
            <span>Angelo Luz</span>
          </div>
          <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon component={NotepadIcon}/>
              <span>Pedidos</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon component={ClientsIcon}/>
              <span>Clientes</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon component={EmployeesIcon}/>
              <span>Colaboradores</span>
            </Menu.Item>
          </Menu>
        </Sider>
        );
    }
}

export default SiderLayout;