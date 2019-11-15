import React, { Component } from 'react';
//Importing AntDesign
import { Layout } from 'antd';
//Importing Components
import Header from '../src/components/Layout/Header/Header';
import Sider from '../src/components/Layout/SiderLayout/SiderLayout';
import Content from '../src/components/Layout/Content/Content';
import FooterLayout from '../src/components/Layout/Footer/FooterLayout';

import './App.css';
//Importing Components

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Sider/>
          <Layout>
            <Header />
            <Content />
            
          </Layout>
        </Layout>
      </div>

    );
  }
}

export default App;





