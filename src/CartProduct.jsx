import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { cartrecDel} from "./cartSlice";



const CartProduct=()=>{
    const mycart=useSelector((state)=>state.mycart.cart);
    const dispatch=useDispatch();

    const cartRecDel=(id)=>{
        dispatch(cartrecDel(id));
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
                <td>{key.price}</td>
               
                  <td> {key.price} </td>
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