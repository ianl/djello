import { connect } from 'react-redux';
import { getBoard } from '../actions';
import Board from '../components/Board';
import { selectBoard, selectLists } from '../reducers/Board';

const mapStateToProps = state => ({
  board: selectBoard(state.Board),
  lists: selectLists(state.Board),
  state: state.Board
})

const mapDispatchToProps = dispatch => ({
  onEnter: id => {
    dispatch(getBoard(id));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);