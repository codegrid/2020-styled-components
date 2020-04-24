import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
  width: 200px;
  padding: 20px;
  color: #ffffff;
  background-color: #177917;
`;

export const App = () => (
  <MyButton>
    Submit
  </MyButton>
);