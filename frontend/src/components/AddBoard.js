import React from 'react';
import PropTypes from 'prop-types';

const AddBoard = ({ onAddBoard }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          onAddBoard(input.value);
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add New Board
        </button>
      </form>
    </div>
  )
}

AddBoard.propTypes = {
  onAddBoard: PropTypes.func.isRequired
}

export default AddBoard;