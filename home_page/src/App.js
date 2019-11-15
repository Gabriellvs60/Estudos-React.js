import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <div className="layout">
        <div className="container">

        
        <div className="sider">
          Sider
        </div>
        <div className="content-container">
          <div className="header">
            Header
            Header
            Header

            Header
            Header
            HeaderHeader
            
          </div>
          <div className="content">
            Content
          </div>
          <div className="footer">
            Footer
          </div>
        </div>
        </div>
      </div>
    );
  }
}

