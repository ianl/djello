import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import { findDOMNode } from 'react-dom';

import CardTextInput from './CardTextInput';

import { Button, Glyphicon, ListGroupItem } from 'react-bootstrap';

class Card extends Component {
  state = {
    isEditing: false,
    isMouseEnter: false
  }

  handleDoubleClick = () => {
    this.setState({
      isEditing: true,
      text: this.props.text
    });
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.onDeleteCard();
    }
    else {
      let card = {
        "id": id,
        "text": text,
        "list": this.props.list
      };
      this.props.onUpdateCard(card);
      this.setState({
        isEditing: false
      });  
    }
  }

  handleDelete = card => {
    this.props.onDeleteCard(card);
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
    const opacity = this.props.isDragging ? 0 : 1;

    if (this.state.isEditing) {
      return (
        <ListGroupItem>
          <CardTextInput text={this.props.text} onSave={(text) => this.handleSave(this.props.id, text)} />
        </ListGroupItem>
      )
    }

    if (this.state.isMouseEnter) {
      return this.props.connectDragSource(this.props.connectDropTarget(
        <div style={{ opacity }}>
          <ListGroupItem 
            onDoubleClick={() => this.handleDoubleClick()} 
            onMouseLeave={() => this.handleMouseLeave()}
          >
            {this.props.text}
            <Button 
              className="pull-right" 
              bsSize="small" 
              onClick={() => this.handleDelete(this.props)}
              style={this.deleteButtonStyle}
            >
              <Glyphicon glyph="glyphicon glyphicon-remove" />
            </Button>
          </ListGroupItem>
        </div>
      ));      
    }
    else {
      return this.props.connectDragSource(this.props.connectDropTarget(
        <div style={{ opacity }}>
          <ListGroupItem 
            onDoubleClick={() => this.handleDoubleClick()} 
            onMouseEnter={() => this.handleMouseEnter()}
          >
            {this.props.text}
          </ListGroupItem>
        </div>
      )); 
    }
  }
}

// Drag Source
const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      list: props.list,
      index: props.index
    };
  },
};

const sourceCollect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

Card = DragSource(ItemTypes.CARD, cardSource, sourceCollect)(Card);

// Drag Target
const cardTarget = {
  hover(props, monitor, component) {
    const dragList = monitor.getItem().list;
    const dragIndex = monitor.getItem().index;

    const hoverList = props.list;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragList === hoverList && dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveCard(dragList, dragIndex, hoverList, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().list = hoverList;
    monitor.getItem().index = hoverIndex;
  }
};

const targetCollect = connect => ({
  connectDropTarget: connect.dropTarget()
});

Card = DropTarget(ItemTypes.CARD, cardTarget, targetCollect)(Card);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  list: PropTypes.number.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onUpdateCard: PropTypes.func.isRequired,

  //connectDragSource: PropTypes.func.isRequired,
  //connectDropTarget: PropTypes.func.isRequired,
  //isDragging: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired
}

export default Card;