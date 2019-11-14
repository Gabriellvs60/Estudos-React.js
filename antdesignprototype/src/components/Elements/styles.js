import styled from 'styled-components';

export const Label = styled.button `
  background-color: ${props => `${props.backgroundcolor}`}; /* Green */
  border: none;
  color: white;
  text-align: center;
  display: inline-block;
  width: 82px;
  height: 22px;
  font-size: 11px;
  border-radius: 90px;
`;