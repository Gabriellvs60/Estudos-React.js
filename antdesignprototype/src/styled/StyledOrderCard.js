import styled from 'styled-components';
//Importing from AntDesign
import { Card} from 'antd';

export const StyledCard = styled(Card)`
display : flex;
height: 73px;

left: 219px;
top: 192px;
background: #FFFFFF;
box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
border-radius: 15px;
`
export const Label = styled.label `
  background-color: ${props => `${props.backgroundcolor}`}; /* Green */
  border: none;
  color: white;
  display: flex;
  float: left;;
  text-align: center;
  width: 82px;
  height: 22px;
  font-size: 11px;
  border-radius: 90px;
`