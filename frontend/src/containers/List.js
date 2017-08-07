import { connect } from 'react-redux';
import { deleteList } from '../actions';
import List from '../components/List';

const mapDispatchToProps = dispatch => ({
  onDeleteList: list => {
    dispatch(deleteList(list));
  }
})

export default connect(null, mapDispatchToProps)(List);