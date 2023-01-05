import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Rick and Morty</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavBar;