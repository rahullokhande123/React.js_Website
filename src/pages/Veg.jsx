
import axios from "axios";
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";


const Veg=()=>{

    const [myVeg,setMyveg]=useState([]);
    const dispatch=useDispatch();

    const loadVeg=()=>{
        let api=`http://localhost:3000/product?category=veg`;
        axios.get(api).then((res)=>{
            setMyveg(res.data)
        })
    }
    useEffect(()=>{
         loadVeg();
    },[])

    const DataCart=(pid, nm, img, desc, price)=>{
        dispatch(addtoCart({id: pid, name:nm, images:img, description:desc,qnty:1,  price:price}))
    }

    const ans=myVeg.map((key)=>{
        return(
            <>
                <tr>
                    <div style={{display:"flex"}}>
                        <div>
                            <td>
                                 <img src={key.images} style={{width:"280px",height:"330px",margin:"20%",border:"2px solid white",borderRadius:"5%"}} />
                            </td>
                        </div>
                        <div style={{marginLeft:"120px",marginTop:"10%"}}>
                            <td>
                                 <h1>{key.name}</h1>
                            </td> <br />
                            <td>
                                 <h4>{key.description}</h4>
                            </td> <br />
                            <td>
                                 <h5>Price: {key.price} Rs.</h5>
                            </td> <br />
                    
                                 {/* <td>{key.category}</td> */}
                            <td>
                                 <Button variant="outline-dark" onClick={()=>{DataCart(key.id, key.name, key.images, key.description, key.price)}}>Add To Cart</Button>
                            </td>
                        </div>
                    </div>
                   
                </tr>
            </>
        )
    })
    return(
        <>
         <div>
            {ans}
         </div>
        </>
    )
}
export default Veg;