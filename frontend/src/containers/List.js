import { connect } from 'react-redux';
import { getCards, deleteCard, updateCard } from '../actions';
import List from '../components/List';

const mapStateToProps = state => ({
  cards: state.cards
})

const mapDispatchToProps = dispatch => ({
  onEnter: () => {
    dispatch(getCards());
  },
  onDeleteCard: id => {
    dispatch(deleteCard(id));
  },
  onUpdateCard: card => {
    dispatch(updateCard(card));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);