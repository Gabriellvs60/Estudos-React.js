import React from 'react';
import './App.css';
//Importing static imgs
import avatarIcon from '../src/static/imgs/lion.svg';
//Imports ANTD
import { Layout, Avatar, Menu, Icon, Breadcrumb} from 'antd';
import { Typography } from 'antd';

const { Header, Footer, Sider, Content} = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;

function App() {
  return (
    <div className="App">
     <Layout>
     <Header className="header-content">
       <Avatar className="avatar" src={avatarIcon} />
       <Title className="title-header" level={3}>Design Studing</Title>
     </Header>
     <Layout>
       <Sider className="sider">
        <Menu
        defaultSelectedkeys={['Dashboard']}
        mode='inline'
        > 
          <Menu.Item key='Dashboard'>
            Dashboard
          </Menu.Item>
          
          <SubMenu
          title={
            <span>
            <Icon type="mail" />
            <span>About Us</span>
            </span>
          }
          >
            <Menu.ItemGroup key="AboutUs" title='Country'>
                <Menu.Item key='location1'>Location 1</Menu.Item>
                <Menu.Item key='location2'>Location 2</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
       </Sider>
     <Layout>
        <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design Layout</Footer>
        </Layout>
      </Layout>
    </Layout>
  </div>
  );
}

export default App;
