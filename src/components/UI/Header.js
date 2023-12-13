import React from "react";
import './Header.css'
import Navigation from "../Layout/Navigation";

const Header=(props)=>{
return(
       <header>
       <Navigation onClick={props.onClick} onClose={props.onClose}/>
        <h2>The E-comR</h2>
        
       </header>

);
}
export default Header;