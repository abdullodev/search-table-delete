import React, { useState } from "react";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, price: "2.8$", name: "Apple" },
    { id: 2, price: "4$", name: "Bananaa" },
    { id: 3, price: "3$", name: "Grape" },
    { id: 4, price: "5$", name: "Orange" },
    { id: 5, price: "4.2$", name: "Cherry" },
    { id: 6, price: "3.5$", name: "Quince" },
    { id: 7, price: "3$", name: "Pear" },
    { id: 8, price: "6$ ", name: "Apricot" },
    { id: 9, price: "3.2$ ", name: "Mandarin" },
    { id: 10, price: "4.4$", name: "Peach" },
  ]);
  const [search, setSearch] = useState("");

  const searchFilter = (e) => {
    setSearch(e.target.value);
  };

  let filtred = products.filter((product) => {
    return (
      product.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !==
      -1
    );
  });

  const deleteRow = (row) => {
    const newRow = products.filter((p) => p.id !== row.id);
    setProducts(newRow);
  };

  return (
    <div className="app">
      <SearchBar searchFilter={searchFilter} />
      <ProductTable products={filtred} deleteRow={deleteRow} />
    </div>
  );
};

export default App;
