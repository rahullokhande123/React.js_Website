import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';

const ProductDisplay=(props)=>{

    const [myPro, setMyPro]=useState({
        id:"",
        name:"",
        description:"",
        images:"",
        price:""
    });

    const location=useLocation();

    useEffect(()=>{
        setMyPro({
            id:location.state.id,
            name:location.state.name,
            description:location.state.description,
            images:location.state.images,
            price:location.state.price
        })
    },[])



    return(
        <>
        <div id="productData">
        <div>
            <img src={`/public/${myPro.images}`} style={{width:"300px",height:"350px",margin:"30px"}} />
        </div>
        <div style={{margin:"40px",marginTop:"60px"}}>
        <h1>Product Name: {myPro.name}</h1>
        <h2>Product Detail:{myPro.description}</h2>
        <h3>Price: {myPro.price}</h3>
        <Button variant="outline-dark">Add To Cart</Button>
        </div>
        </div>
        </>
    )
}
export default ProductDisplay;