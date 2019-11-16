import styled from 'styled-components';
//Importing from AntDesign
import { Card } from 'antd';

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`

export const StyledCard = styled(Card)`
display : flex;
flex-direction: row;
width: 80%;
margin-top: 30px;
height: 90px;
left: 10px;
box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
border-radius: 15px;
`

export const StyledContentCard = styled.div`
display : flex;


`
export const Label = styled.label`
  display : flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => `${props.backgroundcolor}`}; /* Green */
  color: white;
  width: 82px;
  height: 22px;
  border-radius: 90px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 15;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0.01em;
  margin-left: 20px;
  margin-top: 10px;

`
export const StyledMarkerType = styled.label`
  display: flex;
  flex-direction: left;
  background-color: #46B035; /* Green */
  width: 5px;
  height: 40px;
  border-radius: 30px;
  margin-bottom: 5px;
  margin-left: 35px;
`

export const StyledText = styled.text`
  display : flex;
  align-items: center;
  margin-bottom: 2.5px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #888888;
  margin-left: 35px;
`