import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import {AiFillShop} from 'react-icons/ai'
import {HiShoppingCart} from 'react-icons/hi'
import {RiUser3Fill} from 'react-icons/ri'
import './Header.css'


const Header = () => {
    return (
        <Navbar className='nav-bar' bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className='brand__logo'><AiFillShop/> FakeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
            <Nav>
              <Nav.Link className='menu' as={Link} to="/">Home</Nav.Link>
              <Nav.Link className='menu' as={Link} to="shop">Shop</Nav.Link>
              <Nav.Link className='menu' as={Link} to="shop">Blog</Nav.Link>
              <Nav.Link className='menu' as={Link} to="shop">About</Nav.Link>
              <Nav.Link className='menu' as={Link} to="shop">Contract</Nav.Link>
              <Nav.Link className='menu'><RiUser3Fill/></Nav.Link>
              <Nav.Link className='menu'><HiShoppingCart/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;