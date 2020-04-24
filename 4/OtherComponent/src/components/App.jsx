import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color: #000000;
  display: flex;
  text-decoration: none;
  &:hover {
    color: #ff8c00;
  }
`;

const SvgIcon = styled.svg`
  width: 24px;
  height: 24px;
  padding-right: 5px;
  ${Link}:hover & {
    fill: #ff8c00;
  }
`;

export const App = () => (
  <Link href="#">
    <SvgIcon>
      <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
    </SvgIcon>
    いいね！
  </Link>
);
