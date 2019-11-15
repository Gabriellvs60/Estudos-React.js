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
            <div>
                <Layout>
                    <Sider />
                    <Layout>
                        {/* <Header /> */}
                        <Content />
                        {/* <Footer/> */}
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default LayoutPage;