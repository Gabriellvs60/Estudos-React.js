import styled from 'styled-components';
import { Icon } from 'antd';

export const StyledIcon = styled(Icon) `
  component: ${props => `${props.component}`}; /* Green */
  width: 50px;
  theme: filled;
`

export const StyledIconFooter = styled.image `
  source: ${props => `${props.component}`}; /* Green */
  fill: red;
  width: 50px;
  border-radius: 90px;
  border-color: red;
  border-style: solid;
  border-width: 1px;
`