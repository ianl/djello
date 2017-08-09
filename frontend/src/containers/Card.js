import { connect } from 'react-redux';
import { deleteCard, updateCard, moveCard } from '../actions';
import Card from '../components/Card';

const mapDispatchToProps = dispatch => ({
  onDeleteCard: card => {
    dispatch(deleteCard(card));
  },
  onUpdateCard: card => {
    dispatch(updateCard(card));
  },
  moveCard: (dragList, dragIndex, hoverList, hoverIndex) => {
    console.log(dragList + ":" + dragIndex + " to " + hoverList + ":" + hoverIndex);
    dispatch(moveCard(dragList, dragIndex, hoverList, hoverIndex));
  }
})

export default connect(null, mapDispatchToProps)(Card);