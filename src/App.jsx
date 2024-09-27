    
    // <div className="d-flex justify-content-around">
    //   <Card style={{ width: '18rem' ,margin:"50px" }}>
    //     <Card.Img variant="top" src="https://niches.minimog.co/cdn/shop/products/18-a_4adbc562-4099-4260-90a8-703db26c42fa.jpg?v=1627567584&width=535" />
    //     <Card.Body>
    //       <Card.Title>Card Title</Card.Title>
    //       <Card.Text>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </Card.Text>
    //       <Button variant="primary">Go somewhere</Button>
    //     </Card.Body>
    //   </Card>
    // </div>

    // <div className="d-flex justify-content-around">
    //   <Card style={{ width: '18rem' ,margin:"50px" }}>
    //     <Card.Img variant="top" src="https://niches.minimog.co/cdn/shop/products/Group919.jpg?v=1627567769&width=360" />
    //     <Card.Body>
    //       <Card.Title>Card Title</Card.Title>
    //       <Card.Text>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </Card.Text>
    //       <Button variant="primary">Go somewhere</Button>
    //     </Card.Body>
    //   </Card>
    // </div> <br />

    // </div>

    {/* ========================================================= */}

        {/* <Card.Img variant="top" src="https://niches.minimog.co/cdn/shop/products/Group920.jpg?v=1627567910&width=360" />
     


    </div>
    
    </Container>
    <Footer/>
    </>
  ) */}
//}
//export default App; */}


import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Laylout";
import Home from "./component/Home";
import CartProduct from "./component/CartProduct";
import SearchProduct from "./component/SearchProduct";
import ProductDisplay from "./component/ProductDisplay";
import Pizza from "./pages/Pizza";
import Burger from "./pages/Burger";
import Veg from "./pages/Veg";
import CheckOut from "./pages/CheckOutProduct";
import PayComplete from "./component/PayComplete";

const App=()=>{

  return(

    <>
       <BrowserRouter>
              <Routes>
                     <Route  path="/" element={<Layout/>} >
                             <Route index element={<Home/>}/>
                             <Route path="home" element={<Home/>}/> 
                             <Route path="cartproduct" element={<CartProduct/>}/>
                             <Route path="searchproduct/:prd" element={<SearchProduct/>}/>
                             <Route path="productdisplay" element={<ProductDisplay/>}/>
                             <Route path="pizza" element={<Pizza/>}/>
                             <Route path="burger" element={<Burger/>}/>
                             <Route path="veg" element={<Veg/>}/>
                             <Route path="checkOut" element={<CheckOut/>}/>
                             <Route path="paycomp" element={<PayComplete/>}/>
                        
                     </Route>
              </Routes>       
       </BrowserRouter>
    </>
  )
}
export default App;