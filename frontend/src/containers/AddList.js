import { connect } from 'react-redux';
import { addList } from '../actions';
import AddList from '../components/AddList';

const mapDispatchToProps = dispatch => ({
  onAddList: (board, name) => {
    dispatch(addList(board, name));
  }
})

export default connect(null, mapDispatchToProps)(AddList);