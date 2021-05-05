import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function HomeNavbar() {
  const styles = {
    tab: { color: 'white' }
  };
  return (
    <Navbar style={{ background: '#2b945e', display: 'flex', justifyContent: 'center' }} expand="lg">
      <Navbar.Brand href="/" style={{}}>
        <img src="./tastealogo.png" className="d-inline-block align-top" alt="React Bootstrap logo"/>
      </Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link style={styles.tab} href="/menu">MENU</Nav.Link>
        <Nav.Link style={styles.tab} href="/order">ORDER ONLINE</Nav.Link>
        <Nav.Link style={styles.tab} href="/shop">SHOP US</Nav.Link>
        <Nav.Link style={styles.tab} href="/blog">BLOG</Nav.Link>
        <Nav.Link style={styles.tab} href="/locations">LOCATIONS</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}
