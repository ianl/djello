import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from '../containers/List';
import AddList from '../containers/AddList';

import { PageHeader, Col } from 'react-bootstrap';

class Board extends Component {
  componentWillMount() {
    this.props.onEnter(this.props.match.params.id);
  }

  render() {
    console.log(
      "state.Board",
      this.props.state
    );
    return (
      <div>
        <PageHeader>
          {this.props.board.name}
          <small>(id: {this.props.board.id})</small>
        </PageHeader>
        {this.props.lists.map(list => (
          <Col sm={6} md={3} key={list.id}>
            <List {...list} />
          </Col>
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
        PropTypes.number.isRequired
      )

  }).isRequired,
  lists: PropTypes.arrayOf(
    PropTypes.shape({

      id: PropTypes.number,
      name: PropTypes.string,
      board: PropTypes.number,
      cards: PropTypes.arrayOf(
        PropTypes.number.isRequired
      ).isRequired

    }).isRequired
  ).isRequired
}

export default Board;