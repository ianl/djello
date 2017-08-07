import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form, FormControl } from 'react-bootstrap';

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
      <Form inline>
        <FormControl 
          type="text" 
          defaultValue={this.state.text} 
          onChange={ev => this.handleChange(ev)}
          onBlur={this.handleBlur} 
        />
      </Form>
    )
  }
}

CardTextInput.propTypes = {
  text: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired
}

export default CardTextInput;