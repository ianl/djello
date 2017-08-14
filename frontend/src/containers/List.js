import { connect } from 'react-redux';
import { deleteList, moveCard } from '../actions';
import List from '../components/List';

const mapDispatchToProps = dispatch => ({
  onDeleteList: list => {
    dispatch(deleteList(list));
  },
  moveCardToEmptyList: (dragList, dragIndex, hoverList) => {
    console.log(dragList + ":" + dragIndex + " to " + hoverList + ":0");
    dispatch(moveCard(dragList, dragIndex, hoverList, 0));
  }
})

export default connect(null, mapDispatchToProps)(List);