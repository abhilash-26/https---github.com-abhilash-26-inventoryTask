import React, { useState } from "react";
import "../css/addProduct.css";
import { addProduct } from "../api/api";

function AddProduct() {
  const [values, setValues] = useState({
    name: "",
    category: "",
    price: null,
    count: null,
  });
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    await addProduct(values);
    setValues({
      name: "",
      category: "",
      price: null,
      count: null,
    });
  };
  return (
    <div className="form_container">
      <div className="input_container">
        <label className="label">Name:</label>
        <input
          className="input"
          onChange={handleChange}
          name="name"
          value={values.name}
        />
      </div>
      <div className="input_container">
        <label className="label">Category</label>
        <input
          className="input"
          onChange={handleChange}
          name="category"
          value={values.category}
        />
      </div>
      <div className="input_container">
        <label className="label">Price</label>
        <input
          className="input"
          onChange={handleChange}
          name="price"
          value={values.price}
        />
      </div>
      <div className="input_container">
        <label className="label">Count</label>
        <input
          className="input"
          onChange={handleChange}
          name="count"
          value={values.count}
        />
      </div>
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default AddProduct;
