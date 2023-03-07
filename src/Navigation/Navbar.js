import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from "../assets/logo.png"
import "./Navbar.css"

function Navigationbar() {
  return (
    <Navbar bg="" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" className='nav__img' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav__content">
            <Nav.Link href="#home" className="py-2">Features</Nav.Link>
            <Nav.Link href="#link" className="py-2">Solution</Nav.Link>
            <Nav.Link href="#link" className="py-2">Offering</Nav.Link>
            <Nav.Link href="#link" className="py-2">Industries</Nav.Link>
            <Nav.Link href="#link" className="py-2">Chatbot templates</Nav.Link>
            <Nav.Link href="#link" className="py-2">Pricing</Nav.Link>
            <Nav.Link href="#link" className="py-2">Contact Us</Nav.Link>
          </Nav>
          <Form className='nav__form'>
            <Button className='nav__btn' variant="outline-primary">Login</Button>
            <Button className='nav__btn'>Sign up</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;