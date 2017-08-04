import React from 'react';
import PropTypes from 'prop-types';

const AddCard = ({ onAddCard, list }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          onAddCard(list, input.value);
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add New Card
        </button>
      </form>
    </div>
  )
}

AddCard.propTypes = {
  onAddCard: PropTypes.func.isRequired
}

export default AddCard;