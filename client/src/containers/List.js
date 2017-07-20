import { connect } from 'react-redux';
import { deleteCard, updateCard } from '../actions';
import List from '../components/List';

const mapStateToProps = state => ({
  cards: state.cards
})

const mapDispatchToProps = dispatch => ({
  onDeleteCard: id => {
    dispatch(deleteCard(id));
  },
  onUpdateCard: (id, text) => {
    dispatch(updateCard(id, text));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);