import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { cartrecDel,addQnty,DelQnty } from "../cartSlice";

import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const CartProduct=()=>{
    const mycart=useSelector((state)=>state.mycart.cart);
    const dispatch=useDispatch();

    const cartRecDel=(id)=>{
        dispatch(cartrecDel(id));
    }

    const qtyInc=(id)=>{
      dispatch(addQnty(id))
    }
  
    const qtyDec=(id)=>{
    dispatch(DelQnty(id))
    }
    
    let totalAmount=0;
    const ans=mycart.map((key)=>{
      totalAmount+=key.price*key.qnty;
        return(
            <>
            <tr>
                
                <td> <img src={"public/"+key.images}  width="100" height="80" /></td>
                <td>{key.name}</td>
                <td>{key.description}</td>
                <td>{key.price} Rs.</td>
                <td>

                    <a href="#"> 
                        <FaMinusCircle onClick={()=>{qtyDec(key.id)}} />
 
                    </a>
    
                        <span style={{paddingLeft:"5px", paddingRight:"5px", fontWeight:"bold"}}> {key.qnty}  </span>
   
                    <a href="#">
                        <FaPlusCircle onClick={()=>{qtyInc(key.id)}} />
                    </a>
    
                  </td>
                  <td> {key.price*key.qnty} Rs. </td>
                <td> <Button variant="secondary" size="sm" onClick={()=>{cartRecDel(key.id)}}>Delete</Button></td>
            </tr>
            </>
        )
    })

    return(
        <>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantiy</th>
          <th>Total Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>Total Amount</th>
          <th>{totalAmount}</th>
        </tr>
      </Table>
        </>
    )
}
export default CartProduct;