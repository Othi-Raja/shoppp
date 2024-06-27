import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
 
import { Navbar, Nav, Container } from 'react-bootstrap';
function App() {
  return (
    <Navbar expand="lg" className='w-100 m-auto' >
    <Container>
      <Navbar.Brand href="#home" className='brand'>Icebar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto ">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Menu</Nav.Link>
          

        </Nav>
        {/* <button  className='Order-btn '>Order</button> */}

      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default App;
