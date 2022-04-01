import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";
const Nav = () => {
   return (
      <ul>
         <li>
            <NavLink exact activeClassName="active" to="/">
               Home
            </NavLink>
         </li>
         <li>
            <NavLink activeClassName="active" to="/news">
               News
            </NavLink>
         </li>
         <li>
            <NavLink activeClassName="active" to="/contact">
               Contact
            </NavLink>
         </li>
         <li>
            <NavLink activeClassName="active" to="/about">
               About
            </NavLink>
         </li>
      </ul>
   );
};

export default Nav;
