// import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-1" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="./about">About Us</Link>
          </li>
          <li>
            <Link to="./contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart {cartItems.length} </li>
          <button
            className="login"
            onClick={() => {
              btnName = "Logout";
              setBtnNameReact("Logout");
              console.log("clicked");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
