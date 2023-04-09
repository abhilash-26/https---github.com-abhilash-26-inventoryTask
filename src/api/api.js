import axios from "axios";

const addProduct = async (values) => {
  await axios({
    method: "post",
    url: "http://localhost:8080/api/v1/product/add-product",
    data: values,
  });
};

const getProducts = async () => {
  const result = await axios({
    method: "get",
    url: "http://localhost:8080/api/v1/product/get-all-product",
  });
  return result.data;
};

const editProducts = async (values) => {
  const result = await axios({
    method: "put",
    url: "http://localhost:8080/api/v1/product/update-product",
    data: {
      id: values._id,
      name: values.name,
      category: values.category,
      price: values.price,
      count: values.count,
    },
  });
  return result.data;
};

const removeProduct = async (values) => {
  await axios({
    method: "delete",
    url: "http://localhost:8080/api/v1/product/remove-product",
    data: {
      id: values._id,
    },
  });
};
export { getProducts, editProducts, removeProduct, addProduct };
