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

const Top=()=>{

  const myCart=useSelector((state)=>state.mycart.cart);
  const navigate=useNavigate();
  console.log(myCart)
  const dataLength=myCart.length;

  const changeNavigate=()=>{
    navigate("./cartproduct")
  }

    return(
        <>
      <Navbar expand="lg" className="bg-body-tertiary" style={{position:"sticky",top:0,zIndex:"3"}} >
      <Container fluid style={{backgroundColor:"black"}}>
        <Navbar.Brand href="#" style={{fontSize:"30px", color:"white",fontFamily:"Anton SC sans-serif"}}>Home Decoration</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{color:"white"}} />
        <Navbar.Collapse id="navbarScroll" style={{color:"white"}}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', color:"white" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="home" style={{color:"white"}} >Home</Nav.Link>
            <Nav.Link as={Link} to="cartproduct" style={{color:"white"}}>My Cart</Nav.Link>
            <Nav.Link as={Link} to="searchproduct" style={{color:"white"}}>
            Search
            </Nav.Link>
          </Nav>

          <div>
            <TiShoppingCart style={{fontSize:"30px",color:"white",marginRight:"15px"}} onClick={changeNavigate} />
          </div>
          
          <div id="cartlogo" style={{fontSize:"15px",position:"absolute",marginLeft:"1215px",top:"10px",Right:"0px"}} >
          {dataLength>=1? <div style={{marginRight:"15px"}}>{dataLength}</div> : "" }
          </div>
           
          <div>
          <FaSearch style={{fontSize:"20px",color:"white",marginRight:"15px"}} />
          </div>
          

        </Navbar.Collapse>
      </Container>
    </Navbar>
 

        </>
    )
}
export default Top;