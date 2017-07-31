import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Home extends Component {
  componentWillMount() {
    this.props.onEnter();
  }

  render() {
    return (
      <div>
        <h1>Boards</h1>
        {this.props.boards.map(board => (
          <Link key={board.id} to={`/boards/${board.id}`}>{board.name}</Link>
        ))}
      </div>
    )
  }
}

Home.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onEnter: PropTypes.func.isRequired
}

export default Home;