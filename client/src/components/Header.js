import React from "react";
import { Link } from "react-router-dom";
// import logo from "../img/logo.png";

const Header = () => {
  return (
    <div className="ui  menu">
      <Link to="/" className="item ui header">
        {/* <img src={logo} alt="MAH Logo" /> */}
        Surveys
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Surveys
        </Link>
      </div>
    </div>
  );
};

export default Header;
