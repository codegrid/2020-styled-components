import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li`
  width: 200px;
  padding: 10px;
  color: ${ props => props.selected ? '#ffffff' : '#1C2163' };
  background-color: ${ props => props.selected ? '#1C2163' : '#ffffff' };
`;
const ExtendedListItem = styled(ListItem)`
  width: 250px;
  border: 1px solid #dddddd;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const App = () => (
  <List>
    <ExtendedListItem>
      Item1
    </ExtendedListItem>
    <ExtendedListItem selected>
      Item2
    </ExtendedListItem>
    <ExtendedListItem>
      Item3
    </ExtendedListItem>
  </List>
);
