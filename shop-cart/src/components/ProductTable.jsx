import React, { useState } from "react";
import ProductRow from "./ProductRow";
import { BiArrowBack } from "react-icons/bi";

const ProductTable = ({ products, deleteRow }) => {
  const [isTrue, setIsTrue] = useState(false);
  const [changeInput, setChangeInput] = useState("");
  const [changeInput2, setChangeInput2] = useState("");

  const changeInputValue1 = (e) => {
    setChangeInput(e.target.value);
  };
  const changeInputValue2 = (e) => {
    setChangeInput2(e.target.value);
  };

  const changeInputValueClick = ({ products }) => {
    if (changeInput === "") {
      alert("Add Name to input please");
    } else if (changeInput2 === "") {
      alert("please write correct");
    } else {
      setIsTrue(false);
    }
  };
  return (
    <>
      {isTrue ? (
        <div className="formParent">
          <div className="formChild">
            <div className="formText">
              <BiArrowBack
                className="exitChangeDivIcon"
                onClick={() => setIsTrue(false)}
              />
              <h2 style={{ overflow: "hidden" }}>Change Name & Price</h2>
            </div>
            <div className="formInput">
              <div>
                <label htmlFor="nameId">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  id="nameId"
                  value={changeInput}
                  onChange={changeInputValue1}
                />
              </div>
              <div>
                <label htmlFor="priceId">Price</label>
                <input
                  type="text"
                  placeholder="Price"
                  id="priceId"
                  value={changeInput2}
                  onChange={changeInputValue2}
                />
              </div>
              <button className="changeButton" onClick={changeInputValueClick}>
                EDIT
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <table className="table table-dark table-hover text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Edit Item</th>
            <th>Delete Item</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductRow
              product={product}
              key={index}
              setIsTrue={setIsTrue}
              setChangeInput={setChangeInput}
              setChangeInput2={setChangeInput2}
              deleteRow={deleteRow}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
