import React from "react";
import {Navbar,Container} from 'react-bootstrap';
import LogoImage from '../../images/gc_header_logo.png';
import './NavBar.css' ;
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../design.css'
const  NavigationBar  = ()=>{
  
  return(
           <header>
<Navbar collapseOnSelect  expand="xl" className="NavBar">  
                <Container className="Container">
                <Navbar.Brand className="NavBar_Brand" href="/">
            <img
                alt=""
                src={LogoImage}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
        Generation challenge
        </Navbar.Brand>
                  <Navbar.Toggle  aria-controls="responsive-navbar-nav" style={{outline:'none'}}/>
                  <Navbar.Collapse  id="responsive-navbar-nav">
                  <div className="Nav">
                  <Nav className="justify-content-center" activeKey="/Home">
        
        <Nav.Item className="navItem">
          <Nav.Link  href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navItem">
          <Nav.Link  href="/Actuality">Actuality</Nav.Link>
        </Nav.Item>
        
        <Nav.Item className="navItem">
          <NavDropdown
              id="nav-dropdown-dark-example"
              title="Programme"
              menuVariant="light"
              
            >
              <NavDropdown.Item className="dropDown_item disabled" href="/UstoUp">Usto Up</NavDropdown.Item>
              <NavDropdown.Item className="dropDown_item disabled" href="/UstoMeeting">Usto Meeting</NavDropdown.Item>
              <NavDropdown.Item className="dropDown_item disabled" href="/UstoTalent">Usto Talent</NavDropdown.Item>
              <NavDropdown.Divider />
    
            </NavDropdown>
        </Nav.Item>
        <Nav.Item className="navItem">
          <NavDropdown
              id="nav-dropdown-dark-example"
              title="Multimedia"
              menuVariant="light"
            >
              <NavDropdown.Item className="dropDown_item disabled" href="/Magasine">Magasine</NavDropdown.Item>
              <NavDropdown.Item className="dropDown_item disabled" href="/Podcast">Podcast</NavDropdown.Item>
              <NavDropdown.Item className="dropDown_item disabled" href="/Radio">Radio</NavDropdown.Item>
              <NavDropdown.Item className="dropDown_item disabled" href="/WebTv">WebTv</NavDropdown.Item>    
            </NavDropdown>
        </Nav.Item>
        <Nav.Item className="navItem">
          <Nav.Link className="disabled" href="/Startup" >Startup</Nav.Link>
        </Nav.Item>
        
        <Nav.Item className="navItem navItem-register">
          <NavDropdown
              id="nav-dropdown-dark-example"
              title="Registration"
              menuVariant="light"
            >
              <NavDropdown.Item  className="dropDown_item " href="/Event">Event</NavDropdown.Item>
              <NavDropdown.Item  className="dropDown_item " href="/Participant">Participant</NavDropdown.Item>
            </NavDropdown>
        </Nav.Item>

      </Nav>
        </div>
        
        </Navbar.Collapse>
        </Container>
            </Navbar>
           </header>
            
        );
}
export default NavigationBar;