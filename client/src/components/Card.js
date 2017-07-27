import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardTextInput from './CardTextInput';

class Card extends Component {
  state = {
    isEditing: false
  }

  handleDoubleClick = () => {
    this.setState({
      isEditing: true,
      text: this.props.text
    });
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.onDeleteCard();
    }
    else {
      let card = {
        "id": id,
        "text": text,
        "list": this.props.list
      };
      this.props.onUpdateCard(card);
      this.setState({
        isEditing: false
      });  
    }
  }

  handleDelete = () => {
    this.props.onDeleteCard();
  }

  render() {
    if (this.state.isEditing) {
      return (
        <li>
          <CardTextInput text={this.props.text} onSave={(text) => this.handleSave(this.props.id, text)} />
        </li>
      )
    }

    return (
      <li onDoubleClick={this.handleDoubleClick}>
        {this.props.text}
        <button onClick={this.handleDelete}>X</button>
      </li>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  list: PropTypes.number.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onUpdateCard: PropTypes.func.isRequired
}

export default Card;