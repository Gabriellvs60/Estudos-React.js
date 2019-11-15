import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import Sider from '../src/components/Layout/SiderLayout/SiderLayout';
import Content from '../src/components/Layout/Content/Content';
import Header from '../src/components/Layout/Header/Header';
import FooterLayout from '../src/components/Layout/Footer/FooterLayout';


//Importing Components
class App extends Component {
  render() {
    return (
      <div className="App">
    <Layout>
      <Sider style={{width: "100%"}}>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <FooterLayout/>
      </Layout>
    </Layout>
 
      </div>

    );
  }
}

export default App;





