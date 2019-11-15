import React, { Component } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;
class FooterLayout extends Component {
    render() {
        return (
            <Footer>
                <h1>I am the Footer</h1>
            </Footer>
        );
    }
}

export default FooterLayout;