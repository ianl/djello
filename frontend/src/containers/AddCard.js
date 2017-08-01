import { connect } from 'react-redux';
import { addCard } from '../actions';
import AddCard from '../components/AddCard';

const mapDispatchToProps = dispatch => ({
  onAddCard: (list, text) => {
    dispatch(addCard(list, text));
  }
})

export default connect(null, mapDispatchToProps)(AddCard);