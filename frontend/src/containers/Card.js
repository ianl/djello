import { connect } from 'react-redux';
import { deleteCard, updateCard, moveCard } from '../actions';
import Card from '../components/Card';

import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import { findDOMNode } from 'react-dom';
import { compose } from 'redux';

const mapDispatchToProps = dispatch => ({
  onDeleteCard: card => {
    dispatch(deleteCard(card));
  },
  onUpdateCard: card => {
    dispatch(updateCard(card));
  },
  moveCard: (dragList, dragIndex, hoverList, hoverIndex, dragId) => {
    console.log(dragList + ":" + dragIndex + " to " + hoverList + ":" + hoverIndex);
    dispatch(moveCard(dragList, dragIndex, hoverList, hoverIndex, dragId));
  }
})

/* react-dnd */
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

// Drag Target
const cardTarget = {
  hover(props, monitor, component) {
    const dragList = monitor.getItem().list;
    const dragIndex = monitor.getItem().index;

    const hoverList = props.list;
    const hoverIndex = props.index;

    const dragId = monitor.getItem().id;

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
    props.moveCard(dragList, dragIndex, hoverList, hoverIndex, dragId);

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

const composeHOC = compose(
  connect(null, mapDispatchToProps),
  DragSource(ItemTypes.CARD, cardSource, sourceCollect),
  DropTarget(ItemTypes.CARD, cardTarget, targetCollect)
);

export default composeHOC(Card);