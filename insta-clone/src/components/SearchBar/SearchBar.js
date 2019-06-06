import React from "react";
import "./SearchBar.css";
import logo from "../../logo-text.png";
import { FaInstagram } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const SearchBar = props => {
  return (
    <div>
      <div className="search-bar">
        <div className="search-left">
          <FaInstagram className="instagram-icon" />
          <img src={logo} alt="Instagram Logo" className="logo-text" />
        </div>
        <div className="search-input">
          <input
            type="text"
            className="input"
            placeholder="&#xf002; search"
            onChange={props.filteredResults}
          />
          <FaSearch className="search-icon" />
        </div>
        <div className="search-right">
          <FaRegCompass className="search-icons" />
          <FaRegHeart className="search-icons" />
          <FaRegUser className="search-icons" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
