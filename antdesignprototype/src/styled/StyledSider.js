import styled from 'styled-components';
//Ant Design
import { Icon } from 'antd';

//Importing Themes
import colors from '../../src/components/Themes/Colors';

// <--- Logo and Username
export const StyledDivLogo = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
`

export const StyledImgLogo = styled.img`
 margin-top: 30px;
 width: 136px;
`

export const StyledLabelUsername = styled.label`
  font-size: 16px;
  line-height: 18px;
  color: #888888;
  margin-top: 20px;
`
// ---> End of Logo and Username

//Sidebar Menu
export const StyledIcon = styled(Icon) `
  component: ${props => `${props.component}`}; /* Green */
  fill: blue;
`