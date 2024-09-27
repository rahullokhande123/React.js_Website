import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addtoCart } from "../cartSlice";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SearchProduct=()=>{

  const {prd} = useParams();
  const [mydata,setMydata]=useState([]);
  const dispatch= useDispatch();
  const navigate=useNavigate();

  const lodData=()=>{
    let api=`http://localhost:3000/product?name=${prd}`;
    axios.get(api).then((res)=>{
      setMydata(res.data)
    })
  }
  useEffect(()=>{
    lodData();
  },[])

  const DataCart=(pid, nm, img, desc, price)=>{
    dispatch(addtoCart({id: pid, name:nm, images:img, description:desc,qnty:1,  price:price}))
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
        <h1 align="center">Search Product Page</h1>
        <div>
          {ans}
        </div>
        </>
    )
  }
export default SearchProduct;