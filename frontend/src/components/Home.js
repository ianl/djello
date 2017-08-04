import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AddBoard from '../containers/AddBoard';

class Home extends Component {
  componentWillMount() {
    this.props.onEnter();
  }

  handleDelete = board => {
    this.props.onDeleteBoard(board);
  }

  render() {
    return (
      <div>
        <h1>Boards</h1>
        {this.props.boards.map(board => (
          <div key={board.id}>
            <Link key={board.id} to={`/boards/${board.id}`}>{board.name}</Link>
            <button onClick={() => this.handleDelete(board)}>X</button>
          </div>
        ))}
        <AddBoard />
      </div>
    )
  }
}

Home.propTypes = {
  onEnter: PropTypes.func.isRequired,
  onDeleteBoard: PropTypes.func.isRequired,
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Home;