import React from 'react';
import styled from 'styled-components'

const MyComponent = styled.div`
  width: 200px;
  padding: 2em;
  color: #000000;
  background-color: #ffffff;
`;

export const App = () => (
  <MyComponent className="my-dark-theme">
    This is my component!
  </MyComponent>
);