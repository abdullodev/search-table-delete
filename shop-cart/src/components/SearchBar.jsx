import React from "react";

const SearchBar = ({ searchFilter }) => {
  return (
    <div className=" m-2 serchBar col d-flex justify-content-center ">
      <input
        type="text"
        placeholder="Search..."
        className="form-control"
        style={{ width: "340px" }}
        onChange={searchFilter}
      />
    </div>
  );
};

export default SearchBar;
