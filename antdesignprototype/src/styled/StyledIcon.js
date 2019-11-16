import styled from 'styled-components';
import { Icon } from 'antd';

export const StyledIcon = styled(Icon) `
  component: ${props => `${props.component}`}; /* Green */
  width: 50px;
  theme: filled;
`

export const StyledIconFooter = styled(Icon) `
  src: ${props => `${props.src}`}; /* Green */
  width: 90px;
  fill: red;
  border-radius: 90px;
  border-color: red;
  border-style: solid;
  border-width: 1px;
`