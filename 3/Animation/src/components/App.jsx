import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideFadeIn = keyframes`
  0% { opacity: 0; transform: translateX(0); }
  20% { opacity: 0.2; transform: translateX(190px);}
  100% { opacity: 1; transform: translateX(200px); }
`;

const Animation = styled.div`
  animation: ${slideFadeIn} 3s infinite;
  width:100px;
  height:100px;
  background-color: palevioletred;
`;

export const App = () => (
  <Animation />
);
