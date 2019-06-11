import React from "react";
import "./SearchBar.css";
import logo from "../../logo-text.png";
import { FaInstagram } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import styled, { css } from "styled-components";
import { Input } from "../JSstyles";

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  margin: auto;
`;

const LogoHeader = styled.div`
  display: inline-flex;
`;

const LogoText = styled.img`
  width: 120px;
  height: 40px;
  margin: auto;
  border-left: 1px solid black;
  padding-top: 5px;
`;

const SearchBar = props => {
  return (
    <SearchDiv>
      <LogoHeader>
        <FaInstagram className="instagram-icon" />
        <LogoText src={logo} alt="Instagram Logo" />
      </LogoHeader>
      <div className="search-input">
        <Input
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
    </SearchDiv>
  );
};

export default SearchBar;
