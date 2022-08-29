import Navbar from "react-bootstrap/Navbar"
import {Container, Nav, NavDropdown} from "react-bootstrap"
function Header(){
    return(
        <div>
           <Navbar bg="dark" expand="lg" className="dzNavbar" >
            <Container>
                <Navbar.Brand className="mainLogo" href="/">ZEENO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{marginLeft:"auto",marginRight:"0px !important"}}>
                    <Nav.Link href="mailto:contact@leryk.com">Contact</Nav.Link>
                    <Nav.Link href="/aboutus">About Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar> 
        </div>
    )
}

export default Header
