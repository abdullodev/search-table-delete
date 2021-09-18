import React from "react";

const ProductRow = ({
  product,
  setIsTrue,
  setChangeInput,
  setChangeInput2,
  deleteRow,
}) => {
  const handleClickInput = () => {
    setIsTrue(true);
    setChangeInput(product.name);
    setChangeInput2(product.price);
  };
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <button className="btn btn-success" onClick={handleClickInput}>
          Edit
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={(e) => deleteRow(product)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
