
import Carousel from 'react-bootstrap/Carousel';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../cartSlice';
import { Navigate, useNavigate } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import img2 from "../../public/dish1.jpg";
import img3 from "../../public/dish6.jpg";
import img4 from "../../public/dish3.jpg";
import img5 from "../../public/dish4.png";
import img6 from "../../public/dish5.jpg";
import video1 from "../../public/video1.mp4";
import img7 from "../../public/dish1.jpg";
import img8 from "../../public/dish2.jpg";
import img9 from "../../public/dish3.jpg";
import video2 from "../../public/video4.mp4";
import img10 from "../../public/panipuri1.jpg";


const Home=()=>{
    //  ======================== Add To Cart Functionality ==========================

    const [mydata,setMydata]=useState([]); 
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const loadData=()=>{
        let api="http://localhost:3000/product";
        axios.get(api).then((res)=>{
            setMydata(res.data)
        })
    }

    useEffect(()=>{
        loadData();
    },[])

    const DataCart=(pid,nm,img,desc,price)=>{
          dispatch(addtoCart({id:pid,name:nm,images:img,description:desc,qnty:1,price:price}))
    }

    const dataSendCart=(key)=>{
          navigate("/productdisplay",{state:key});
    }

    const ans=mydata.map((key)=>{
        return(
            <>
      <Card style={{ width: '18rem', margin:"auto",margin:"20px" }}>
      <Card.Img variant="top" onClick={()=>{dataSendCart(key)}}  src={key.images} 
      style={{width:"100%",height:"300px"}} />
      <Card.Body>

        <Card.Title style={{color:"blue",fontSize:'30px'}} onClick={()=>{dataSendCart(key)}} > 
          <a href="" style={{textDecoration:"none"}}>{key.name}</a>
          </Card.Title>

        <Card.Text>
          {key.description}
        </Card.Text>
        <Card.Text>
          Price {key.price} Rs.
        </Card.Text>
        <Button variant="success" onClick={()=>{DataCart(key.id,key.name,key.images,key.description,key.price)}} >Add To Cart</Button>
      </Card.Body>
    </Card>

            </>
        )
    })

    return(
        <>
         
<marquee description="left">
      uhuhu hbuhuhu huhh uhhu
</marquee>

          {/* =============================== Carousel =================================== */}

   <Carousel>
      <Carousel.Item>
      <img src={img2}  width="100%" height="650px" /> 
      
        
        <Carousel.Caption>
          <h3>Hurry up !!!</h3>
           <p>Sale For Only August Month With 20% Discount </p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <img src={img3} width="100%" height="650px" />
        
         <Carousel.Caption>
           <h3>Second slide label</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
       <img src={img4} width="100%" height="650px" />
         <Carousel.Caption>
           <h3>Third slide label</h3>
           <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item>

       <Carousel.Item>
       <img src={img5} width="100%" height="650px" />
         <Carousel.Caption>
           <h3>Third slide label</h3>
           <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item>

       <Carousel.Item>
       <img src={img6} width="100%" height="650px" />
         <Carousel.Caption>
           <h3>Third slide label</h3>
         <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item>
     </Carousel>

     {/* ================================= First Hero Section ================================ */}

     <div style={{margin:"100px", display:"flex"}}>
    <video src={video1} autoPlay muted loop controls width="500px" height="500px"></video>
    <div style={{margin:"100px"}}>
    <h1 style={{fontFamily:"Anton SC sans-serif"}}>Enjoy your bed time <br />
    like never before!</h1>

    <p>Lush, rare, unique and always fresh. Stop into our store to <br />
    find the perfect plant for your home or office.</p>

    <h6 style={{marginTop:"20px",}}>SHOP THE LOOK</h6>
    </div>
    </div>

  {/* ============================== Categories ============================= */}

    <h5 style={{textAlign:"center"}}>ORDER BY CATEGORIES</h5>
    <h1 style={{textAlign:"center",fontFamily:"Anton SC sans-serif"}}>Choose Your Dish And Going To Enjoy!</h1>

    <Container style={{margin:"50px",textAlign:"center",marginLeft:"80px"}}>
      <Row style={{display:"flex"}}>
      <Col xs={6} md={4}>
          <a href="#"><Image src={img7} width="300px" height="300px" roundedCircle /></a> <br />
          <div style={{margin:"40px"}}>
      
            <h2 >Breakfast</h2>
          
          {/* <a href="#">21 items</a> */}
          </div>
        </Col>
        <Col xs={6} md={4}>
        <a href="#"><Image src={img8} width="300px" height="300px" roundedCircle /></a>
        <div style={{margin:"40px"}}>
          
        <h2 >Lunch</h2>

          {/* <a href="#">21 items</a> */}
          </div>
        </Col>
        <Col xs={6} md={4}>
        <a href="#"><Image src={img9} width="300px" height="300px" roundedCircle /></a>
        <div style={{margin:"40px"}}>
          
        <h2 >Dinner</h2>

          {/* <a href="#">21 items</a> */}
          </div>
        </Col>
      </Row>
    </Container>

    {/* ================================= Video ================================ */}


    <video src={video2} autoPlay muted loop controls style={{position:"sticky", zIndex:-1,top:0}}>
    </video>

{/* =========================== Panipuri =================== */}
    <div id='panipuri'>
      <img style={{border:"1px solid black",borderRadius:"2%",margin:"50px"}} src={img10} width="800px" height="500px" />
      <div >
          <h1>Enjoy Your Day With Panipuri</h1>
          <h5>Absulatly Free,Only For Today</h5>
          <h3> Visit Now !!! </h3>
      </div>
      
    </div>

    {/* ============================ Our Product ========================== */}
    <Container>
          <div style={{color:"white",marginTop:"20px",marginBottom:"20px",textAlign:"center",fontFamily:"Anton SC sans-serif"}}>
            <h1>Our Products</h1>
          </div>
    </Container>
 
    {/* ================================= Add To Cart ================================== */}
     
    <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap", width:"90%",margin:"auto"}}>
         {ans}
    </div>   
       
        </>
    )
}
export default Home;