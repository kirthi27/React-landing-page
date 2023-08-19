import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
//import Offcanvas from 'react-bootstrap/Offcanvas';
function Navbarr(){
    return(
    <div>
        <Navbar bg="primary" data-bs-theme="light" bgcolor="red">  
  
        <Navbar>
        <Nav>
            <Nav.Link href="#category"></Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#AboutUs">AboutUs</Nav.Link>
            <NavDropdown title="Category">
                    <NavDropdown.Item href="#action3">District</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Color</NavDropdown.Item>
             </NavDropdown>
               <Navbar.Brand href="#home"><h5><c>SKODA~CONNECT</c></h5></Navbar.Brand>             
          </Nav>
          </Navbar>
          </Navbar>
       </div>
    );
       
    
}
export default Navbarr;
