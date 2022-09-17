
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><em>Game Time</em></Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/">Login/Logout</Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/bars/new">Create New Bar</Nav.Link>
            <Nav.Link href="/comments/new">Post New Comment</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;