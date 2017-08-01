import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../containers/Card';

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.cards.map(card => (
          <Card 
            key={card.id} 
            {...card} 
            onDeleteCard={() => this.props.onDeleteCard(card.id)}
            onUpdateCard={card => this.props.onUpdateCard(card)}
          />
        ))}
      </ul>
    )
  }
}

List.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      list: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onUpdateCard: PropTypes.func.isRequired
}

export default List;