import React from 'react'
import styled from 'styled-components'
import { Rotate, Dash } from '../../utils/Animations';
import Colors from '../../utils/Colors';

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: -25px 0 0 -25px;
`;

export const StyledSpinner = styled.svg`
  animation: ${Rotate} 2s linear infinite;
  width: ${props => props.size || 100}px;
  height: ${props => props.size || 100}px;
  & .path {
    stroke: ${props => props.color || Colors.primary};
    stroke-linecap: round;
    animation: ${Dash} 1.5s ease-in-out infinite;
  }
`;

export const ActivityIndicator = (props) => {
  return <StyledSpinner {...props}>
    <circle
      className="path"
      cx={`${props.size ? props.size / 2 : 50}`}
      cy={`${props.size ? props.size / 2 : 50}`}
      r={`${props.size ? props.size * 2 / 5 : 33}`}
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>;
}

const PageLoader = (props) => {
  return (
    <SpinnerContainer>
      <ActivityIndicator {...props}/>
    </SpinnerContainer>
  )
};

export default PageLoader;