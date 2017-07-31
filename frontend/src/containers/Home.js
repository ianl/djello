import { connect } from 'react-redux';
import { getBoards } from '../actions';
import Home from '../components/Home';

const mapStateToProps = state => ({
  boards: state.boards
})

const mapDispatchToProps = dispatch => ({
  onEnter: () => {
    dispatch(getBoards());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);