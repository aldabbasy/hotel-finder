import { keyframes } from 'styled-components';

export const FadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const FadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const Shake = keyframes`
  0% { transform: translateX(30px); }
  20% { transform: translateX(-30px); }
  40% { transform: translateX(20px); }
  60% { transform: translateX(-20px); }
  80% { transform: translateX(10px); }
  100% { transform: translateX(0px); }
`;
export const Rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
export const Dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;