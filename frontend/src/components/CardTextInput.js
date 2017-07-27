import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardTextInput extends Component {
  state = {
    text: this.props.text
  }

  handleChange = ev => {
    this.setState({
      text: ev.target.value
    });
  }

  handleBlur = () => {
    this.props.onSave(this.state.text);
  }

  render() {
    return (
      <input 
        type="text" 
        defaultValue={this.state.text} 
        onChange={ev => this.handleChange(ev)}
        onBlur={this.handleBlur} 
      />
    )
  }
}

CardTextInput.propTypes = {
  text: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired
}

export default CardTextInput;