import styled from 'styled-components';
//Importing from AntDesign
import { Icon} from 'antd';

export const StyledIcon = styled(Icon) `
  component: ${props => `${props.component}`}; /* Green */
`