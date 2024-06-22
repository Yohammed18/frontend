import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Abdul & Billy Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/login"><i className='fas fa-shopping-cart'></i>&nbsp;Login</Nav.Link>
              <Nav.Link href="/cart"><i className='fas fa-user'></i>&nbsp;Cart</Nav.Link>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header