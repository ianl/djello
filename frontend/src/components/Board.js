import React from 'react';
import List from '../containers/List';
import AddCard from '../containers/AddCard';

const Board = props => (
  <div>
    <h1>Board: {props.match.params.id}!</h1>
    <List />
    <AddCard />
  </div>
)

export default Board;