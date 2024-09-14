import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { cartrecDel,addQnty,DelQnty } from "../cartSlice";

import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const CartProduct=()=>{
   
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


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

<Button id="chackout" variant="success" size="lm" onClick={handleShow} >CheckOut</Button>

{/* ============================ Modual 1 ============================== */}
      <Modal className="modual1" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Shipping Address </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                autoFocus/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                autoFocus/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Mobile Number "
                autoFocus/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                autoFocus/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
                autoFocus/>
            </Form.Group>

            <b>Total Amount : {totalAmount} Rs.</b> <br />
            <b>Shipping Charges : 100 Rs.</b> <br />
            <b>Total Paybal Amount : {totalAmount+100} </b>      
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleShow2}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ============================ Modual 2 ============================== */}

      <Modal className="modual2" show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title> Choice Pyment Method </Modal.Title>
        </Modal.Header>
        <div style={{margin:"20px"}}>
             <input type="radio" name="r1" /> Cash On Delivery 
             <br/> <br/>
             <input type="radio" name="r1" /> UPI  
             <br/> <br/>
             <input type="radio" name="r1" /> Credit/Debit Card 
             <br/> <br/>
             <input type="radio" name="r1" /> Internet Banking
             <br/> <br/>

        </div>
  
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="success" onClick={()=>{navigate("/paycomp")}} >
          Proceed To Payment
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
export default CartProduct;