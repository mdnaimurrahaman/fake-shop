import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import {AiFillShop} from 'react-icons/ai'
import {HiShoppingCart} from 'react-icons/hi'
import {RiUser3Fill} from 'react-icons/ri'
import './Header.css'


const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className='brand__logo' href="#home"><AiFillShop/> FakeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link"><RiUser3Fill/></Nav.Link>
              <Nav.Link href="#link"><HiShoppingCart/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;