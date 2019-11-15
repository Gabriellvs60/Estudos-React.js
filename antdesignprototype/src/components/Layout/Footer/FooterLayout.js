import React, { Component } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;
class FooterLayout extends Component {
    render() {
        return (
            <Footer>
                <h1>Prev Next</h1>
            </Footer>
        );
    }
}

export default FooterLayout;