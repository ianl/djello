import { connect } from 'react-redux';
import { addCard } from '../actions';
import AddCard from '../components/AddCard';

const mapDispatchToProps = dispatch => ({
  onAddCard: text => {
    dispatch(addCard(text))
  }
})

export default connect(null, mapDispatchToProps)(AddCard);