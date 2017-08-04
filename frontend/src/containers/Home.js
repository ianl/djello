import { connect } from 'react-redux';
import { getBoards, deleteBoard } from '../actions';
import Home from '../components/Home';

const mapStateToProps = state => ({
  boards: state.BoardReducer.boards
})

const mapDispatchToProps = dispatch => ({
  onEnter: () => {
    dispatch(getBoards());
  },
  onDeleteBoard: board => {
    dispatch(deleteBoard(board));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);