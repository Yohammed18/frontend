import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {  LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
              <Navbar.Brand>Abdul & Billy Shop</Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to='/login'>
                  <Nav.Link><i className='fas fa-shopping-cart'></i>&nbsp;Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                  <Nav.Link><i className='fas fa-user'></i>&nbsp;Cart</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header