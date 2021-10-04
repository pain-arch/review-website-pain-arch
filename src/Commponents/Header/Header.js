import React from 'react';
import './Header.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from '../../Assets/images/FluentLang.png';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/"><img className="logo-design" src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav>
                        <Nav.Link className="nav-items" href="/">Home</Nav.Link>
                        <Nav.Link className="nav-items" href="/about-us">About Us</Nav.Link>
                        <Nav.Link className="nav-items" href="/services">Services</Nav.Link>
                        <Nav.Link className="nav-items" href="/contact">Contact</Nav.Link>
                        <Nav.Link href="#signin">
                            <Button className="button-design">Sign in</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
        </Navbar>
            
        </div>
    );
};

export default Header;