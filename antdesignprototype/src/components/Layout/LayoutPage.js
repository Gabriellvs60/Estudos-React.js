import React, { Component } from 'react';

//Importing AntDesign
import { Layout } from 'antd';

//Importing Components
import Header from './Header/Header';
import Sider from './SiderLayout/SiderLayout';
import Content from './Content/Content';
import Footer from './Footer/Footer';

class LayoutPage extends Component {
    render() {
        return (
                <Layout>
                    <Sider/>
                    <Layout>
                        <Header/>
                        <Content/>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
        );
    }
}

export default LayoutPage;