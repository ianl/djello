import { connect } from 'react-redux';
import { deleteBoard } from '../actions';
import BoardItem from '../components/BoardItem';

const mapDispatchToProps = dispatch => ({
  onDeleteBoard: board => {
    dispatch(deleteBoard(board));
  }
})

export default connect(null, mapDispatchToProps)(BoardItem);