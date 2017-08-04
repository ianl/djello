import { connect } from 'react-redux';
import { deleteList, deleteCard, updateCard } from '../actions';
import List from '../components/List';

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  onDeleteList: list => {
    dispatch(deleteList(list));
  },
  onDeleteCard: card => {
    dispatch(deleteCard(card));
  },
  onUpdateCard: card => {
    dispatch(updateCard(card));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);