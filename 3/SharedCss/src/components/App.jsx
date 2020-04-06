import React from 'react';
import styled, { css } from 'styled-components';

const statusBgColor = css`
  background-color: ${
    props =>
      props.status === 'error' ? '#ff443d' // error時
    : props.status === 'warn' ?  '#f09235' // warn時
    : '#64c253'                            // 未指定時
  };
`;

const StatusArea = styled.div`
  ${statusBgColor}
  display: inline-block;
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;
const StatusBar = styled.div`
  ${statusBgColor}
  width: 500px;
  height: 32px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const App = () => (
  <>
    <StatusArea />
    <StatusArea status="warn" />
    <StatusArea status="error" />

    <StatusBar />
    <StatusBar status="warn" />
    <StatusBar status="error" />
  </>
);
