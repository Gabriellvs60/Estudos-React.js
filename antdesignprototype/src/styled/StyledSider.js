import styled from 'styled-components';
//Ant Design
import { Layout, Icon, Menu } from 'antd';

//Importing Themes
import colors from '../../src/components/Themes/Colors';

//Layout.Sider
export const StyledSider = styled(Layout.Sider)`
 height: 125vh;
 margin-left:20px;
 margin-top:20px;
 margin-bottom:5px;
 background: ${colors().white};
 box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
 border-radius: 17px;
`

// <--- Logo and Username
export const StyledDivLogo = styled.div`
  background: ${colors().white};
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
 font-family: Montserrat;
 margin-top: 18px;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 18px;
letter-spacing: 0.08em;
color: ${colors().darkGray};
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
border-bottom: 1px solid rgba(0, 0, 0, 0.08);
border-width: 0.85px;
`

export const StyledDivLoginLogout = styled.div `
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
 justify-content: center;
`