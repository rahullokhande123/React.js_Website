import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addtoCart } from "../cartSlice";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Pizza from "../pages/Pizza";

const SearchProduct=()=>{

    const {prd}=useParams();
    const navigate=useNavigate();
    // const [val,setVal]=useState("");
    const [mydata,setMydata]=useState([]);
    const dispatch= useDispatch();

    // const handleChange=(e)=>{
    //     setVal(e.target.value);
    //     let api=`http://localhost:3000/product`;
    //     axios.get(api).then((res)=>{
    //         setMydata(res.data);
    //     })
    // }
    const handleSearchLoad=()=>{
      let api="http://localhost:3000/product";
      axios.get(api).then((res)=>{
        setMydata(res.data)
      })
    }
    useEffect(()=>{
      handleSearchLoad()
    },[])

    const DataCart=(pid,nm,img,desc,price)=>{
        dispatch(addtoCart({id:pid,name:nm,images:img,description:desc,qnty:1,price:price}))
    }
    const dataSendCart=(key)=>{
      navigate("/productdisplay",{state:key});
    }


    // const ans=mydata.map((key)=>{
        // let str=key.name;
        // let status=str.includes(val);
        // if(status==true){
       const ans=mydata.map((key)=>{
        return(
          <>
          <Card style={{ width: '18rem', margin:"auto",margin:"20px" }}>
          <Card.Img variant="top" src={"public/"+key.images} style={{width:"100%",height:"300px"}} />
          <Card.Body>
            <Card.Title>{key.name}</Card.Title>
            <Card.Text>
              {key.description}
            </Card.Text>
            <Card.Text>
              Price {key.price}
            </Card.Text>
            <Button variant="success" onClick={()=>{DataCart(key.id,key.name,key.images,key.description,key.price)}} >Add To Cart</Button>
          </Card.Body>
        </Card>
    
                </>
        )
       })
    
    return(
        <>
        {/* <center>
        <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap", width:"90%",margin:"auto"}}>
         {ans}
        </div>
        </center> */}
        {ans}
        </>
    )
}
export default SearchProduct;