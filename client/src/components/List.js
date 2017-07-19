import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const List = ({ cards, onDeleteCard }) => (
  <ul>
    {cards.map(card => (
      <Card key={card.id} {...card} onDeleteCard={() => onDeleteCard(card.id)} />
    ))}
  </ul>
)

List.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onDeleteCard: PropTypes.func.isRequired
}

export default List;