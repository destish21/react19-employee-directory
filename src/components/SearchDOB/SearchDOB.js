import React, { useContext } from "react";
import "./DataBody.css";
import DataAreaContext from "../../utils/AreaContext";

const SearchDOB = () => {
  const context = useContext(DataAreaContext);

  return (
    <div className="searchbox">
      <div className="input-group">
        <div className="input-group-prepend">
          {/* <span className="input-group-text" id="">
            DOB
          </span> */}
        </div>
        {/* coming soon */}
        {/* <input type="date" className="form-control" onChange={e => context.handleSearchChange(e)} />

        <input type="date" 
        className="form-control" 
        onChange={e => context.handleSearchChange(e)} /> */}
      </div>
    </div>
  );
};
export default SearchDOB;
