import { connect } from 'react-redux';
import { deleteCard } from '../actions';
import List from '../components/List';

const mapStateToProps = state => ({
  cards: state.cards
})

const mapDispatchToProps = dispatch => ({
  onDeleteCard: id => {
    dispatch(deleteCard(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);