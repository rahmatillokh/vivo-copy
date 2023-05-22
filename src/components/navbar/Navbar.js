import React from "react";
import { NAVBAR__LINKS } from "../../static/data";
import { CiSearch } from "react-icons/ci";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { vivoLogo } from "../../assets";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={vivoLogo} alt="" />
      </div>
      <ul className="collection">
        {NAVBAR__LINKS?.map((item, id) => (
          <Link className="item" key={id} to={item.href}>
            {item.text}
          </Link>
        ))}
      </ul>
      <CiSearch size="24px" />
    </div>
  );
}

export default Navbar;
