import { connect } from 'react-redux';
import { deleteList, moveCard } from '../actions';
import List from '../components/List';

import { DragDropContext, DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import HTML5Backend from 'react-dnd-html5-backend';
import { compose } from 'redux';

const mapDispatchToProps = dispatch => ({
  onDeleteList: list => {
    dispatch(deleteList(list));
  },
  moveCardToEmptyList: (dragList, dragIndex, hoverList) => {
    console.log(dragList + ":" + dragIndex + " to " + hoverList + ":0");
    dispatch(moveCard(dragList, dragIndex, hoverList, 0));
  }
})

/* react-dnd */
// Drag Target
const listTarget = {
  hover(props, monitor, component) {
    const dragList = monitor.getItem().list;
    const dragIndex = monitor.getItem().index;
    const hoverList = props.id;

    if (dragList === hoverList) return;
    if (props.cards.length > 0) return;

    props.moveCardToEmptyList(dragList, dragIndex, hoverList);

    monitor.getItem().list = hoverList;
    monitor.getItem().index = 0;
  }
};

const targetCollect = connect => ({
  connectDropTarget: connect.dropTarget()
});

const composeHOC = compose(
  DragDropContext(HTML5Backend),
  connect(null, mapDispatchToProps),
  DropTarget(ItemTypes.CARD, listTarget, targetCollect)
);

export default composeHOC(List);