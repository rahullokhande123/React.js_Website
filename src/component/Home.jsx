
import Carousel from 'react-bootstrap/Carousel';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../cartSlice';


const Home=()=>{
    //  ======================== Add To Cart Functionality ==========================

    const [mydata,setMydata]=useState([]); 
    const dispatch=useDispatch();
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
          dispatch(addtoCart({id:pid,name:nm,images:img,description:desc,price:price}))
    }

    const ans=mydata.map((key)=>{
        return(
            <>
      <Card style={{ width: '18rem', margin:"auto",margin:"20px" }}>
      <Card.Img variant="top" src={key.images} style={{width:"100%",height:"300px"}} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          {key.description}
        </Card.Text>
        <Card.Text>
          Price {key.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>{DataCart(key.id,key.name,key.images,key.description,key.price)}} >Add To Cart</Button>
      </Card.Body>
    </Card>

            </>
        )
    })

    return(
        <>
          {/* =============================== Carousel =================================== */}

   <Carousel>
      <Carousel.Item>
        <a href="#"> <img src="public/r3.jpg"  width="100%" height="650px" /> </a>
        
        <Carousel.Caption>
          <h3>First slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <a href="#"> <img src='public/r4.jpg' width="100%" height="650px" /> </a>
        
         <Carousel.Caption>
           <h3>Second slide label</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
       <a href="#"> <img src='public/r5.jpg' width="100%" height="650px" /> </a>
         <Carousel.Caption>
           <h3>Third slide label</h3>
           <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item>

       <Carousel.Item>
       <a href="#"> <img src='public/r6.jpg' width="100%" height="650px" /> </a>
         <Carousel.Caption>
           <h3>Third slide label</h3>
           <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item>

       <Carousel.Item>
       <a href="#"> <img src='public/r8.jpg' width="100%" height="650px" /></a>
         <Carousel.Caption>
           <h3>Third slide label</h3>
         <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item>
     </Carousel>

     {/* ================================= First Hero Section ================================ */}

     <div style={{margin:"80px", display:"flex"}}>
    <img src='/src/images/m8.jpg' width="600px" height="600px" />
    <div style={{margin:"100px"}}>
    <h1 style={{fontFamily:"Anton SC sans-serif"}}>Enjoy your bed time <br />
    like never before!</h1>

    <p>Lush, rare, unique and always fresh. Stop into our store to <br />
    find the perfect plant for your home or office.</p>

    <h6 style={{marginTop:"20px",}}>SHOP THE LOOK</h6>
    </div>
    </div>

    <h5 style={{textAlign:"center"}}>SHOP BY CATEGORIES</h5>
    <h1 style={{textAlign:"center",fontFamily:"Anton SC sans-serif"}}>Bedsheets you are going to enjoy!</h1>


    {/* ================================= Add To Cart ================================== */}
     
    <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap", width:"90%",margin:"auto"}}>
         {ans}
    </div>   
       

        </>
    )
}
export default Home;