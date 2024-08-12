
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Top from "./component/Navbar";

const Layout=()=>{

    return(
        <>
          <Top/>
          <Outlet/>
          <Footer/>
        </>
    )
}
export default Layout;