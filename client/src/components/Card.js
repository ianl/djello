import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ onDeleteCard, text }) => (
  <li
    
  >
    {text}
    <button onClick={onDeleteCard}>X</button>
  </li>
)

Card.propTypes = {
  onDeleteCard: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Card;