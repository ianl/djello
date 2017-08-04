import React from 'react';
import PropTypes from 'prop-types';

const AddList = ({ onAddList, board }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          onAddList(board, input.value);
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add New List
        </button>
      </form>
    </div>
  )
}

AddList.propTypes = {
  onAddList: PropTypes.func.isRequired
}

export default AddList;