import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = ()=>{
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand as ={Link} to="/">I Am A Dentist</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>                      
                        </Nav>
                        <Nav>
                            {
                                user ? <button onClick={handleSignOut} className='btn btn-warning ps-5 pe-5'>Sign Out </button>
                                : <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
                            }
                            
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;