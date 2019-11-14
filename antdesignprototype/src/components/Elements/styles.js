import styled from 'styled-components';

//Importing from AntDesign
import { Card } from 'antd';

export const Label = styled.label `
  background-color: ${props => `${props.backgroundcolor}`}; /* Green */
  border: none;
  color: white;
  text-align: center;
  display: inline-block;
  width: 82px;
  height: 22px;
  font-size: 11px;
  border-radius: 90px;
`
export const CardOrder = styled(Card)`
position: absolute;
width: 975px;
height: 73px;
left: 219px;
top: 192px;
background: #FFFFFF;
box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
border-radius: 15px;
`