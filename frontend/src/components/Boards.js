import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BoardItem from '../containers/BoardItem';
import AddBoard from '../containers/AddBoard';

import { Col } from 'react-bootstrap';

class Boards extends Component {
  componentWillMount() {
    this.props.onEnter();
  }

  render() {
    console.log(
      "state.Boards",
      this.props.state
    );
    return (
      <div>
        {this.props.boards.map(board => (
          <Col sm={6} md={3} key={board.id}>
            <BoardItem {...board} />
          </Col>
        ))}
        <AddBoard />
      </div>
    )      
  }
}

Boards.propTypes = {
  onEnter: PropTypes.func.isRequired,
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Boards;