import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, NavItem, Popover, OverlayTrigger } from 'react-bootstrap';

class Header extends Component {
  popoverClick = (
    <Popover id="popover-trigger-click" title="About Djello">
      <p>A lite Trello clone built with React, Redux and Django Rest Framework.</p>
      <hr/>
      <h4>About Ian Liu</h4>
      <p>
        <small>I'm an aspiring developer, a pianist, and a YouTube content creator.</small>
      </p>
      <p>
        <small>
          I'm looking for engineering opportunities to work with great people
          and to solve problems that matter.
        </small>
      </p>
      <p>
        Get in touch at&nbsp;
        <strong>
          <a 
            href="https://www.linkedin.com/in/ianthl/" 
            target="_blank"
            rel="noopener noreferrer"
          >
           linkedin.com/in/ianthl
          </a>
        </strong>
      </p>
    </Popover>
  );

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={`/`}>Djello</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem href="https://github.com/ianthl/djello" target="_blank">GitHub</NavItem>
          <OverlayTrigger 
            trigger="click" 
            placement="bottom" 
            overlay={this.popoverClick}
          >
            <NavItem>About</NavItem>
          </OverlayTrigger>
        </Nav>
      </Navbar>
    )      
  }
}

export default Header;