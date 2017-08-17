import { connect } from 'react-redux';
import { getBoards } from '../actions';
import Boards from '../components/Boards';
import { selectBoards } from '../reducers/Boards';

const mapStateToProps = state => ({
  boards: selectBoards(state.Boards),
  state: state.Boards
})

const mapDispatchToProps = dispatch => ({
  onEnter: () => {
    dispatch(getBoards());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Boards);