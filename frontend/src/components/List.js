import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../containers/Card';
import AddCard from '../containers/AddCard';

class List extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}(id: {this.props.id})</h2>
        <ul>
          {this.props.cards.map(card => (
            <Card 
              key={card.id} 
              {...card} 
              onDeleteCard={() => this.props.onDeleteCard(card)}
              onUpdateCard={card => this.props.onUpdateCard(card)}
            />
          ))}
        </ul>
        <AddCard list={this.props.id} />
      </div>
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