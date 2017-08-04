import { connect } from 'react-redux';
import { deleteList } from '../actions';
import List from '../components/List';

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  onDeleteList: list => {
    dispatch(deleteList(list));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);