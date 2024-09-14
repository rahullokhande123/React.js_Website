import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import { TiShoppingCart } from "react-icons/ti";

import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import img1 from "../../public/Logo.png";

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Top=()=>{

  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [product,setProduct]=useState("")

  const myCart=useSelector((state)=>state.mycart.cart);
  const navigate=useNavigate();
  console.log(myCart)
  const dataLength=myCart.length;

  const changeNavigate=()=>{
    navigate("./cartproduct")
  }

  const handleSearch=(product)=>{
    navigate('/searchproduct/${product}')
    setShow(false)
  }

    return(
        <>
      <Navbar expand="lg" className="bg-body-tertiary" style={{position:"sticky",top:0,zIndex:"3"}} >
      <Container fluid style={{backgroundColor:"yellowgreen"}}>
       
        <img style={{marginLeft:"20px",marginRight:"30px",marginTop:"5px",marginBottom:'5px'}} src={img1} width="150px" height="100px" />
        <Navbar.Toggle aria-controls="navbarScroll" style={{color:"white"}} />
        <Navbar.Collapse id="navbarScroll" style={{color:"black"}}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', color:"black" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="home" style={{color:"black",fontSize:"20px",marginLeft:"10px"}} >Home</Nav.Link>
            <Nav.Link as={Link} to="cartproduct" style={{color:"black",fontSize:"20px",marginLeft:"10px"}}>My Cart</Nav.Link>
            <Nav.Link as={Link} to="searchproduct" style={{color:"black",fontSize:"20px",marginLeft:"10px"}}>
            Search
            </Nav.Link>
{/* ============================= Dropdown Section ============================ */}

<Navbar expand="lg">
      <Container fluid>
        
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Category"
              menuVariant="dark"
            >
              <NavDropdown.Item as={Link} to="pizza">Pizza</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="burger">
                Burger
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.3">Nonveg</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.3">French</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="veg">Veg</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.3">Chinese</NavDropdown.Item>
              <NavDropdown.Divider />

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* ========================= Close Dropdown ====================== */}
     </Nav>

          <div>
            <TiShoppingCart style={{fontSize:"30px",color:"black",marginRight:"25px"}} onClick={changeNavigate} />
          </div>
          
          <div id="cartlogo" style={{fontSize:"18px",position:"absolute",marginLeft:"1195px",top:"30px",Right:"0px"}} >
          {dataLength>=1? <div style={{marginRight:"15px"}}><b>{dataLength}</b></div> : "" }
          </div>
           
          <div>
          <FaSearch onClick={handleShow} style={{fontSize:"20px",color:"black",marginRight:"55px"}} />
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* ================================= Module =============================== */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Search</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Product Name"
                autoFocus
                value={product} onChange={(e)=>{setProduct(e.target.value)}}
              />
            </Form.Group>
  
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </Modal.Footer>
      </Modal>
    
        </>
    )
}
export default Top;