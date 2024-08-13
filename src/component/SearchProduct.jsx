import axios from "axios";
import { useState } from "react";

const SearchProduct=()=>{

    const [val,setVal]=useState("");
    const [mydata,setMydata]=useState([]);

    const handleChange=(e)=>{
        setVal(e.target.value);
        let api="http://localhost:3000/product";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }

    const ans=mydata.map((key)=>{
        let str=key.name;
        let status=str.includes(val);
        if(status==true){
            
        }
    })
    return(
        <>
        <center>
        <h1 align="center">Search Product</h1>
        Enter Product Name: <input type="text" value={val} onChange={handleChange} />
        </center>
        </>
    )
}
export default SearchProduct;