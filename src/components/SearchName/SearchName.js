import React, { useContext } from "react";
import "./SearchName.css";
import DataAreaContext from "../../utils/AreaContext";

const SearchName = () => {
  const context = useContext(DataAreaContext);

  return (
    <div id="container">
    <div className="searchbox">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="">
            Search
            </span>
        </div>
        <input
          type="search"
          className="form-control"
          placeholder="name"
          aria-label="Search"
          onChange={e => context.handleSearchChange(e)}
        />
      </div>
    </div>
  </div>
  );
}
export default SearchName;
