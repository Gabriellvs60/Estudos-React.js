import styled from 'styled-components';
//Ant Design
import { Layout, Icon, Menu } from 'antd';

//Importing Themes
import colors from '../../src/components/Themes/Colors';

//Layout.Sider
export const StyledSider = styled(Layout.Sider)`
 height: 115vh;
 margin-left:20px;
 margin-top:20px;
 margin-bottom:5px;
 background: #fff;
 box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
 border-radius: 17px;
`

// <--- Logo and Username
export const StyledDivLogo = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
`

export const StyledImgLogo = styled.img`
 width: 136px;
 display: flex;
 align-content: center;
`

export const StyledLabelUsername = styled.label`
  font-size: 16px;
  line-height: 18px;
  color: #888888;
`
// ---> End of Logo and Username

//Sidebar Menu
export const StyledMenu = styled(Menu) `
margin-top: 10vh;
margin-bottom: 70vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const StyledMenuItem = styled(Menu.Item) `
margin-top: 50px;
`

export const StyledIcon = styled(Icon) `
  component: ${props => `${props.component}`}; /* Green */
  width: 50px;
  size: 20px;
`