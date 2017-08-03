import { connect } from 'react-redux';
import { deleteCard, updateCard } from '../actions';
import List from '../components/List';

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  onDeleteCard: card => {
    dispatch(deleteCard(card));
  },
  onUpdateCard: card => {
    dispatch(updateCard(card));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);