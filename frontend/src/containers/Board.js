import { connect } from 'react-redux';
import { getBoard } from '../actions';
import Board from '../components/Board';

const mapStateToProps = state => ({
  boards: state.boards
})

const mapDispatchToProps = dispatch => ({
  onEnter: id => {
    dispatch(getBoard(id));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);