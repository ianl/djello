import { connect } from 'react-redux';
import { addBoard } from '../actions';
import AddBoard from '../components/AddBoard';

const mapDispatchToProps = dispatch => ({
  onAddBoard: name => {
    dispatch(addBoard(name));
  }
})

export default connect(null, mapDispatchToProps)(AddBoard);