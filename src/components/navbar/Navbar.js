import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoBagHandle } from "react-icons/io5";
import { NAVBAR_ITEMS } from "../../static/Index";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  let { pathname } = useLocation();
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-all">
          <ul className="nav-list">
            {NAVBAR_ITEMS.map((el) => (
              <li key={el.id} className="nav-item">
                <NavLink to={el.url}>{el.title}</NavLink>
              </li>
            ))}
          </ul>
          <IoSearchOutline className="search-icon" />
          <IoBagHandle className="cart-icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
