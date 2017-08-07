import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Button, Glyphicon, ListGroupItem } from 'react-bootstrap';

class BoardItem extends Component {
  state = {
    isMouseEnter: false
  }

  handleDelete = board => {
    this.props.onDeleteBoard(board);
  }

  handleMouseEnter = () => {
    this.setState({
      isMouseEnter: true
    });
  }

  handleMouseLeave = () => {
    this.setState({
      isMouseEnter: false
    });
  }

  deleteButtonStyle = {
    marginTop: "-5px"
  }

  render() {
    if (this.state.isMouseEnter) {
      return (
        <ListGroupItem onMouseLeave={() => this.handleMouseLeave()}>
          <Link key={this.props.id} to={`/boards/${this.props.id}`}>{this.props.name}</Link>
          <Button 
            className="pull-right" 
            bsSize="small" 
            onClick={() => this.handleDelete(this.props)}
            style={this.deleteButtonStyle}
          >
            <Glyphicon glyph="glyphicon glyphicon-remove" />
          </Button>
        </ListGroupItem>
      )      
    }
    else {
      return (
        <ListGroupItem onMouseEnter={() => this.handleMouseEnter()}>
          <Link key={this.props.id} to={`/boards/${this.props.id}`}>{this.props.name}</Link>
        </ListGroupItem>
      )
    }
  }
}

BoardItem.propTypes = {
  onDeleteBoard: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default BoardItem;