{/* <style>
@import url('https://fonts.googleapis.com/css2?family=Anton+SC&display=swap');
</style>

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Carousel from 'react-bootstrap/Carousel';

import Image from 'react-bootstrap/Image';

import Footer from './Footer';


// For Round small image
import Col from 'react-bootstrap/Col';


import Row from 'react-bootstrap/Row';

// For Add To Card

import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

const App=()=>{
  return(
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{backgroundColor:"black"}}>
        <Navbar.Brand href="#" style={{fontSize:"30px", color:"white",fontFamily:"Anton SC sans-serif"}}>Home Decoration</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{color:"white"}} />
        <Navbar.Collapse id="navbarScroll" style={{color:"white"}}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', color:"white" }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color:"white"}} >Home</Nav.Link>
            <Nav.Link href="#action2" style={{color:"white"}}>Shops</Nav.Link>
            <Nav.Link href="#action1" style={{color:"white"}}>
            Products
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  {/* =============================== Carousel =================================== */}
  // <Carousel>
  //     <Carousel.Item>
  //       <a href="#"> <img src="src/images/m8.jpg"  width="100%" height="650px" /> </a>
        
  //       <Carousel.Caption>
  //         <h3>First slide label</h3>
  //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  //       </Carousel.Caption>
  //     </Carousel.Item>
  //     <Carousel.Item>
  //       <a href="#"> <img src='src/images/m7.jpg' width="100%" height="650px" /> </a>
        
  //       <Carousel.Caption>
  //         <h3>Second slide label</h3>
  //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  //       </Carousel.Caption>
  //     </Carousel.Item>
  //     <Carousel.Item>
  //     <a href="#"> <img src='src/images/m5.jpg' width="100%" height="650px" /> </a>
  //       <Carousel.Caption>
  //         <h3>Third slide label</h3>
  //         <p>
  //           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
  //         </p>
  //       </Carousel.Caption>
  //     </Carousel.Item>

  //     <Carousel.Item>
  //     <a href="#"> <img src='src/images/m4.jpg' width="100%" height="650px" /> </a>
  //       <Carousel.Caption>
  //         <h3>Third slide label</h3>
  //         <p>
  //           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
  //         </p>
  //       </Carousel.Caption>
  //     </Carousel.Item>

  //     <Carousel.Item>
  //     <a href="#"> <img src='src/images/m3.jpg' width="100%" height="650px" /> </a>
  //       <Carousel.Caption>
  //         <h3>Third slide label</h3>
  //         <p>
  //           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
  //         </p>
  //       </Carousel.Caption>
  //     </Carousel.Item>
   // </Carousel>

    {/* ================================= First Hero Section ================================ */}
    // <div style={{margin:"80px", display:"flex"}}>
    // <Image src="https://images.unsplash.com/photo-1566836610827-e2a98b312ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="600px" height="600px" fluid />
    // <div style={{margin:"100px"}}>
    // <h1 style={{fontFamily:"Anton SC sans-serif"}}>Enjoy your bed time <br />
    // like never before!</h1>

    // <p>Lush, rare, unique and always fresh. Stop into our store to <br />
    // find the perfect plant for your home or office.</p>

    // <h6 style={{marginTop:"20px",}}>SHOP THE LOOK</h6>
    // </div>
    // </div>

    // <h5 style={{textAlign:"center"}}>SHOP BY CATEGORIES</h5>
    // <h1 style={{textAlign:"center",fontFamily:"Anton SC sans-serif"}}>Bedsheets you are going to enjoy!</h1>

    {/* ============================== Video ========================================= */}
    
    {/* <Container>
    <iframe
                  className='shadow-1-strong rounded'
                  src='https://www.youtube.com/embed/zumJJUL_ruM?si=FNWQHDQEDyTzAtws" title="YouTube video player'
                  title='YouTube video'
                  allowFullScreen
                  data-gtm-yt-inspected-2340190_699='true'
                  id='388567449'
                width="1200px" height="400px" style={{marginLeft:"60px"}} ></iframe>
    </Container> */}

    {/* ============================ Circle Images ========================================== */}
    // <Container style={{margin:"50px",textAlign:"center",marginLeft:"80px"}}>
    //   <Row style={{display:"flex"}}>
    //   <Col xs={6} md={4}>
    //       <a href="#"><Image src="https://niches.minimog.co/cdn/shop/files/2_1cfa3de7-5c1a-407d-9256-9a4ba7b25c27.jpg?v=1628911761" roundedCircle /></a> <br />
    //       <div style={{margin:"40px"}}>
    //       <a href="#">Cushion Cover</a> <br />
    //       <a href="#">21 items</a>
    //       </div>
    //     </Col>
    //     <Col xs={6} md={4}>
    //     <a href="#"><Image src="https://niches.minimog.co/cdn/shop/files/1_623ed588-fe6c-429d-856f-d818aa1b67f4.jpg?v=1628911041" roundedCircle /></a>
    //     <div style={{margin:"40px"}}>
    //       <a href="#">Duvet Covers</a> <br />
    //       <a href="#">21 items</a>
    //       </div>
    //     </Col>
    //     <Col xs={6} md={4}>
    //     <a href="#"><Image src="https://niches.minimog.co/cdn/shop/files/3_5757682f-6815-49e2-ab01-26abf00ddacd.jpg?v=1628911804" roundedCircle /></a>
    //     <div style={{margin:"40px"}}>
    //       <a href="#">
    //       Pillowcases</a> <br />
    //       <a href="#">21 items</a>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
    
    // <div style={{textAlign:"center",marginBottom:"100px"}}>
    // <a href="#"><Image src="https://niches.minimog.co/cdn/shop/files/3_d9deec6d-f91a-485a-a9a8-ab4c3cf9d175.jpg?v=1622449027&width=900" width="600px" height="600px" style={{marginRight:"80px"}} fluid /></a>
    // <a href="#"><Image src="https://niches.minimog.co/cdn/shop/files/4_c7bd13d4-f332-4382-992d-0a07bc05b9a7.jpg?v=1622449062&width=900" width="600px" height="600px" fluid /></a>
    // </div>

    // {/* ========================================================================= */}
    // <Container style={{margin:"50px",alignItems:"center",marginLeft:"160px"}}>
    
    // <div style={{display:"flex"}}>
    // <div className="d-flex justify-content-around">
    //   <Card style={{ width: '18rem',margin:"50px" }}>
    //     <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0042/0750/9567/products/19_5c822162-ca83-4a23-933a-c72f4e1f12f2.jpg?v=1627567527&width=533" />
    //     <Card.Body>
    //       <Card.Title>Card Title</Card.Title>
    //       <Card.Text>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </Card.Text>
    //       <Button variant="primary">Go somewhere</Button>
    //     </Card.Body>
    //   </Card>
    // </div>

    
    // <div className="d-flex justify-content-around">
    //   <Card style={{ width: '18rem' ,margin:"50px" }}>
    //     <Card.Img variant="top" src="https://niches.minimog.co/cdn/shop/products/18-a_4adbc562-4099-4260-90a8-703db26c42fa.jpg?v=1627567584&width=535" />
    //     <Card.Body>
    //       <Card.Title>Card Title</Card.Title>
    //       <Card.Text>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </Card.Text>
    //       <Button variant="primary">Go somewhere</Button>
    //     </Card.Body>
    //   </Card>
    // </div>

    // <div className="d-flex justify-content-around">
    //   <Card style={{ width: '18rem' ,margin:"50px" }}>
    //     <Card.Img variant="top" src="https://niches.minimog.co/cdn/shop/products/Group919.jpg?v=1627567769&width=360" />
    //     <Card.Body>
    //       <Card.Title>Card Title</Card.Title>
    //       <Card.Text>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </Card.Text>
    //       <Button variant="primary">Go somewhere</Button>
    //     </Card.Body>
    //   </Card>
    // </div> <br />

    // </div>

    {/* ========================================================= */}

    // <div style={{display:"flex"}}>
    // <div className="d-flex justify-content-around">
    //   <Card style={{ width: '18rem' ,margin:"50px" }}>
        {/* <Card.Img variant="top" src="https://niches.minimog.co/cdn/shop/products/Group920.jpg?v=1627567910&width=360" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>

    
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' ,margin:"50px" }}>
        <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0042/0750/9567/products/9_49b77efc-72c2-4f0e-a54a-b45908aeb7ab.jpg?v=1627568153&width=533" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>

    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' ,margin:"50px" }}>
        <Card.Img variant="top" src="https://niches.minimog.co/cdn/shop/products/1_75cb3963-e20a-464b-942e-37fba3f844b6.jpg?v=1627568236&width=360" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div> <br />

    </div>
    
    </Container>
    <Footer/>
    </>
  ) */}
//}
//export default App; */}


import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Laylout";
import Home from "./component/Home";
import CartProduct from "./component/CartProduct";
import SearchProduct from "./component/SearchProduct";
import ProductDisplay from "./component/ProductDisplay";
import Pizza from "./pages/Pizza";
import Burger from "./pages/Burger";
import Veg from "./pages/Veg";


const App=()=>{

  return(

    <>
       <BrowserRouter>
              <Routes>
                     <Route  path="/" element={<Layout/>} >
                             <Route index element={<Home/>}/>
                             <Route path="home" element={<Home/>}/> 
                             <Route path="cartproduct" element={<CartProduct/>}/>
                             <Route path="searchproduct" element={<SearchProduct/>}/>
                             <Route path="productdisplay" element={<ProductDisplay/>}/>
                             <Route path="pizza" element={<Pizza/>}/>
                             <Route path="burger" element={<Burger/>}/>
                             <Route path="veg" element={<Veg/>}/>
                           
                        
                     </Route>
              </Routes>       
       </BrowserRouter>
    </>
  )
}
export default App;