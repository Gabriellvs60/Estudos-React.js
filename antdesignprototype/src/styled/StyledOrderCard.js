import styled from 'styled-components';
//Importing from AntDesign
import { Card } from 'antd';

export const StyledFlexContainer = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 972px;
`

export const StyledCard = styled(Card)`
display : flex;
width: 972px;
margin-top: 30px;
height: 73px;
left: 219px;
top: 192px;

box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
border-radius: 15px;
`
export const Label = styled.label `
  display : flex;
  background-color: ${props => `${props.backgroundcolor}`}; /* Green */
  border: none;
  color: white;
  float: left;;
  text-align: center;
  width: 82px;
  height: 22px;
  font-size: 11px;
  border-radius: 90px;
`

export const StyledText = styled.text `
  display : flex;
  

`