import React from 'react';
// createGlobalStyleヘルパーもインポート
import styled, { createGlobalStyle } from 'styled-components'

// グローバルなCSSの定義
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.dark ? '#000000' : '#ffffff'};
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  width: 200px;
  padding: 2em;
  background-color: papayawhip;
`;

export const App = () => (
  <>
    {/* createGlobalStyleヘルパーで定義したコンポーネントを配置 */}
    <GlobalStyle dark />
    <Wrapper>
      <Title>Hello, World!</Title>
    </Wrapper>
  </>
);