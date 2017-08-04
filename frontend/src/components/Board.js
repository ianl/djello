import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from '../containers/List';
import AddList from '../containers/AddList';

class Board extends Component {
  componentWillMount() {
    this.props.onEnter(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>{this.props.board.name}(id: {this.props.board.id})</h1>
        {this.props.board.lists.map(list => (
          <List key={list.id} {...list} />
        ))}
        <AddList board={this.props.board} />
      </div>
    )
  }
}

Board.propTypes = {
  onEnter: PropTypes.func.isRequired,
  board: PropTypes.shape({

      id: PropTypes.number,
      name: PropTypes.string,
      lists: PropTypes.arrayOf(
        PropTypes.shape({

          id: PropTypes.number,
          name: PropTypes.string,
          cards: PropTypes.arrayOf(
            PropTypes.shape({

              id: PropTypes.number,
              text: PropTypes.string,
              list: PropTypes.number

            }).isRequired
          ).isRequired

        }).isRequired
      ).isRequired

  }).isRequired
}

export default Board;