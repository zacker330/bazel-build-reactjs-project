import React,{useContext} from "react";
import { Link } from 'react-router-dom'

 
const Nav = () => {
  const [openNav, setOpenNav] = React.useState(false);
  
  const session = false;
  
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  return (
    <div>nav</div>
  );
}

export default Nav;