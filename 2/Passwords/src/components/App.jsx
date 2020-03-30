import React from 'react';
import styled from 'styled-components';

const PasswordInput = styled.input.attrs(() => ({
  type: 'password',
}))`
  margin: 5px;
  border: 2px solid #97000b;
  border-radius: 5px;
`;
export const App = () => (
  <>
    パスワード: <PasswordInput name={'password'} />
    パスワード（確認）: <PasswordInput name={'passwordConfirm'} />
  </>
);
