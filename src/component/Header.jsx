import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiTwotoneBook } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = ({count}) => {
  return (
   <div>
     <div style={{ borderBottom: "1px solid black" }}>
      <Navbar expand="lg" bg="white" className="bg-body-tertiary">
        <Container>
          <Link to='/'>
          <Navbar.Brand >
            <img
              className="w-50"
              src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
            ></img>
          </Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto ms-0 my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Men</Nav.Link>
              <Nav.Link href="#action2">Women</Nav.Link>
              <Nav.Link href="#action2">Mobile Covers</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <h5 className="mt-1">Login</h5>
            </Form>
            <div className=" position-relative">
          <Link to="/addcart">  <AiTwotoneBook className="ms-2 aftere  fs-4"  /></Link>
           {
            count === 0 ? (null) : ( <span className="position-absolute  top-0  end-0 w-50 h-50 rounded-circle" style={{backgroundColor:'yellow' , fontSize:'9px' ,paddingLeft:"4px" , paddingBottom:'2px' }}>{count}</span>)
           }
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
      <h6 style={{paddingLeft:'100px', paddingTop:'20px'}}>Home / Men Clothing</h6>
   </div>
  );
};

export default Header;
