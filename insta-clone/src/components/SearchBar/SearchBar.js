import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div>
      <div className="search-bar">
        <div className="search-left">
          <i className="fab fa-instagram" />
          <h2 className="brand">Instagram</h2>
        </div>

        <input
          type="text"
          className="input"
          placeholder="&#xf002; search"
          onChange={props.filteredResults}
        />
        <div className="search-right">
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
