import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import HTML5Backend from 'react-dnd-html5-backend';

import Card from '../containers/Card';
import AddCard from '../containers/AddCard';

import { Button, Glyphicon, Panel, ListGroup } from 'react-bootstrap';

class List extends Component {
  state = {
    isMouseEnter: false
  }

  handleDelete = list => {
    this.props.onDeleteList(list);
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

  panelHeader = () => {
    if (this.state.isMouseEnter) {
      return (
        <div onMouseLeave={() => this.handleMouseLeave()}>
          {this.props.name}<small>(id: {this.props.id})</small>
          <Button 
            className="pull-right" 
            bsSize="small"
            onClick={() => this.handleDelete(this.props)}
            style={this.deleteButtonStyle}
          >
            <Glyphicon glyph="glyphicon glyphicon-remove" />
          </Button>
        </div>
      )      
    }
    else {
      return (
        <div onMouseEnter={() => this.handleMouseEnter()}>
          {this.props.name}<small>(id: {this.props.id})</small>
        </div>
      )
    }
  }

  render() {
    return this.props.connectDropTarget(
      <div>
        <Panel header={this.panelHeader()} bsStyle="info">
          <ListGroup>
            {this.props.cards.map((card, i) => (
              <Card key={card.id} index={i} {...card} />
            ))}
          </ListGroup>
          <AddCard list={this.props} />
        </Panel>
      </div>
    )  
  }
}

// Drag Target
const listTarget = {
  hover(props, monitor, component) {
    const dragList = monitor.getItem().list;
    const dragIndex = monitor.getItem().index;

    const hoverList = props.id;

    if (dragList === hoverList) {
      return;
    }

    if (props.cards.length > 0) {
      return;
    }

    props.moveCardToEmptyList(dragList, dragIndex, hoverList);

    monitor.getItem().list = hoverList;
    monitor.getItem().index = 0;
  }
};

const targetCollect = connect => ({
  connectDropTarget: connect.dropTarget()
});

List = DropTarget(ItemTypes.CARD, listTarget, targetCollect)(List);

List.propTypes = {
  onDeleteList: PropTypes.func.isRequired,
  moveCardToEmptyList: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      list: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}

export default DragDropContext(HTML5Backend)(List);