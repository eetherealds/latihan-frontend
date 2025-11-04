import React from 'react';
import { Navbar as RBNavbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <RBNavbar bg="light" expand="lg" className="mb-4">
      <Container>
        <RBNavbar.Brand as={Link} to={token ? '/dashboard' : '/login'}>
          Latihan Frontend
        </RBNavbar.Brand>
        <RBNavbar.Toggle />
        <RBNavbar.Collapse className="justify-content-end">
          <Nav>
            {!token && (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
            {token && (
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Button variant="outline-secondary" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
}

export default Navbar;