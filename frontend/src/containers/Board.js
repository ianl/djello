import { connect } from 'react-redux';
import { getBoard } from '../actions';
import Board from '../components/Board';

const mapStateToProps = state => ({
  board: state.BoardReducer.board
})

const mapDispatchToProps = dispatch => ({
  onEnter: id => {
    dispatch(getBoard(id));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);