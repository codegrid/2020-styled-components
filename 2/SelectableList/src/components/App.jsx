import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 200px;
`;
const ListItem = styled.li`
  padding: 10px;
  color: ${ props => props.selected ? '#ffffff' : '#1C2163' };
  background-color: ${ props => props.selected ? '#1C2163' : '#ffffff' };
`;

export const App = () => (
  <List>
    <ListItem>
      Item1
    </ListItem>
    <ListItem selected>
      Item2
    </ListItem>
    <ListItem>
      Item3
    </ListItem>
  </List>
);
