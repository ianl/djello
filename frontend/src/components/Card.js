import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardTextInput from './CardTextInput';

import { Button, Glyphicon, ListGroupItem } from 'react-bootstrap';

class Card extends Component {
  state = {
    isEditing: false,
    isMouseEnter: false
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

  handleDelete = card => {
    this.props.onDeleteCard(card);
  }

  handleMouseEnter = () => {
    this.setState({
      isMouseEnter: true
    });
  }

  handleMouseLeave = () => {
    this.setState({
      isMouseEnter: false
    });
  }

  deleteButtonStyle = {
    marginTop: "-5px"
  }  

  render() {
    if (this.state.isEditing) {
      return (
        <ListGroupItem>
          <CardTextInput text={this.props.text} onSave={(text) => this.handleSave(this.props.id, text)} />
        </ListGroupItem>
      )
    }

    if (this.state.isMouseEnter) {
      return (
        <ListGroupItem 
          onDoubleClick={() => this.handleDoubleClick()} 
          onMouseLeave={() => this.handleMouseLeave()}
        >
          {this.props.text}
          <Button 
            className="pull-right" 
            bsSize="small" 
            onClick={() => this.handleDelete(this.props)}
            style={this.deleteButtonStyle}
          >
            <Glyphicon glyph="glyphicon glyphicon-remove" />
          </Button>
        </ListGroupItem>
      )      
    }
    else {
      return (
        <ListGroupItem 
          onDoubleClick={() => this.handleDoubleClick()} 
          onMouseEnter={() => this.handleMouseEnter()}
        >
          {this.props.text}
        </ListGroupItem>
      ) 
    }
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