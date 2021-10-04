import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                    <Nav.Link className="text-light" href="/">Home</Nav.Link>
                    <Nav.Link className="text-light" href="/about-us">About Us</Nav.Link>
                    <Nav.Link className="text-light" href="/services">Services</Nav.Link>
                    </Nav>
                    <Nav.Link className="text-light"> copyright &copy;devloper-himu</Nav.Link>
                </Container>
            </Navbar>
            
        </div>
    );
};

export default Footer;