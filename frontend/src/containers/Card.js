import { connect } from 'react-redux';
import { deleteCard, updateCard } from '../actions';
import Card from '../components/Card';

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

export default connect(mapStateToProps, mapDispatchToProps)(Card);