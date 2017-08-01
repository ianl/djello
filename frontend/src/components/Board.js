import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from '../containers/List';
import AddCard from '../containers/AddCard';

class Board extends Component {
  componentWillMount() {
    this.props.onEnter(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.boards.map(board => (
          <div key={board.id}>
            <h1>{board.name}(id: {board.id})</h1>
            {board.lists.map(list => (
              <div key={list.id}>
                <h2>{list.name}(id: {list.id})</h2>
                <List {...list} />
                <AddCard list={list.id} />
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

Board.propTypes = {
  onEnter: PropTypes.func.isRequired,
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,

      lists: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,

          cards: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              text: PropTypes.string.isRequired,
            }).isRequired
          ).isRequired

        }).isRequired
      ).isRequired

    }).isRequired
  ).isRequired
}

export default Board;