import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Button, Form, FormControl, Glyphicon } from 'react-bootstrap';

class AddBoard extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let input = ReactDOM.findDOMNode(this.refs.myInput);
    if (!input.value.trim()) {
      return;
    }
    this.props.onAddBoard(input.value);
    input.value = '';    
  }

  render() {
    return (
      <div>
        <Form inline
          onSubmit={e => this.handleSubmit(e)}
        >
          <FormControl
            placeholder="Add New Board"
            ref="myInput"
          />
          <Button type="submit">
            <Glyphicon glyph="glyphicon glyphicon-plus" />
          </Button>
        </Form>
      </div>
    )
  }
}

AddBoard.propTypes = {
  onAddBoard: PropTypes.func.isRequired
}

export default AddBoard;