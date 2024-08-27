
import axios from "axios";
import { useState,useEffect } from "react";


const Pizza=()=>{

    const [mypizza,setMypizza]=useState([]);

    const loadPizza=()=>{
        let api=`http://localhost:3000/product?category=pizza`;
        axios.get(api).then((res)=>{
            setMypizza(res.data)
        })
    }
    useEffect(()=>{
         loadPizza();
    },[])

    const ans=mypizza.map((key)=>{
        return(
            <>
                <tr>
                    
                   <td>
                        <img src={key.images} style={{width:"200px"}} />
                    </td>
                    <td>
                        <h1>{key.name}</h1>
                    </td> <br />
                    <td>
                        <h4>{key.description}</h4>
                    </td>
                    <td>
                        <h5>{key.price}</h5>
                    </td>
                    
                    <td>{key.category}</td>
                </tr>
            </>
        )
    })
    return(
        <>
        <h1>Pizza</h1>
      
         <div>
            {ans}
         </div>
        </>
    )
}
export default Pizza;