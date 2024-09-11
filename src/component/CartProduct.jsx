import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { cartrecDel,addQnty,DelQnty } from "../cartSlice";

import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';





function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}








const CartProduct=()=>{
  const [modalShow, setModalShow] = React.useState(false);




    const mycart=useSelector((state)=>state.mycart.cart);
    const dispatch=useDispatch();
    const navigate=useNavigate();

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
                
                <td> <img src={key.images}  width="100" height="80" /></td>
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
        <h1 style={{marginLeft:"40%"}}>Cart Product</h1>
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
          <th>{totalAmount} Rs.</th>
        </tr>
      </Table>
{/* ============================ Chack List ============================== */}

<Button id="chackout" variant="success" size="lm" onClick={()=>{navigate("/checkOut")}} >CheckOut</Button>




<Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </>
    )
}
export default CartProduct;