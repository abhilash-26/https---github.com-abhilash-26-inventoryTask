import React, { useEffect, useState } from "react";
import { getProducts, editProducts, removeProduct } from "../api/api";
import "../css/productPage.css";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { setNotification } from "../redux/features/notification";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const PORT = "http://localhost:8080/";
const socket = io.connect(PORT);

function ProductPage() {
  const [products, setProducts] = useState();
  const [editRow, setEditRow] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    async function getData() {
      const result = await getProducts();
      setProducts(result.data);
    }
    getData();
    socket.on("message", (text) => {
      getData();
      dispatch(setNotification(text));
    });
  }, []);
  const handleEdit = (row) => {
    setEditRow(row);
  };
  const handleClose = () => {
    setEditRow();
  };
  const handleSubmit = async () => {
    await editProducts(editRow);
    setEditRow();
  };
  const handleChange = (e) => {
    setEditRow({
      ...editRow,
      [e.target.name]: e.target.value,
    });
  };
  const handleDelete = async (values) => {
    await removeProduct(values);
  };
  return (
    <div>
      {editRow && (
        <div className="edit_box">
          <div className="edit_input_wrap">
            <label>Name:</label>
            <input
              className="edit_input"
              name="name"
              value={editRow.name}
              onChange={handleChange}
            />
          </div>
          <div className="edit_input_wrap">
            <label>Category:</label>
            <input
              className="edit_input"
              name="category"
              value={editRow.category}
              onChange={handleChange}
            />
          </div>
          <div className="edit_input_wrap">
            <label>Price:</label>
            <input
              className="edit_input"
              name="price"
              value={editRow.price}
              onChange={handleChange}
            />
          </div>
          <div className="edit_input_wrap">
            <label>Count:</label>
            <input
              className="edit_input"
              name="count"
              value={editRow.count}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleSubmit}>Save</button>
          <button onClick={handleClose}>Cancel</button>
        </div>
      )}
      {products && (
        <div className="table_container">
          <table>
            <tr className="table_header">
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Count</th>
            </tr>
            {products.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>

                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.count}</td>
                  <EditIcon
                    className="edit_icon"
                    onClick={() => handleEdit(item)}
                  />
                  <DeleteIcon
                    className="delete_icon"
                    onClick={() => handleDelete(item)}
                  />
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
