import React from "react";
import logo from "../../assets/imgs/logo.png";
import { NavLink } from "react-router-dom";
import "./Header.scss";
const Header = () => {
   return (
      <header className="header">
         <div className="img">
            <img src={logo} alt="logo" />
         </div>
         <ul className="nav">
            <li>
               <NavLink activeClassName="active" to="/document">
                  Document
               </NavLink>
            </li>
            <li>
               <NavLink activeClassName="active" to="/calendar">
                  Calendar
               </NavLink>
            </li>
         </ul>
      </header>
   );
};

export default Header;
