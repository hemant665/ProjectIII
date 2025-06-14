/* eslint-disable no-unused-vars */
import axios from "../../Api/axiosconfig";
import { loadproduct } from "../reducers/ProductSlice";

export const asyncUpdateProduct = (id, product) => async (dispatch, getState) => {
  try {
    await axios.patch("/products/" + id, product);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.log(error);
  }
};

export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/products/" + id);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.log(error);
  }
};

export const asyncLoadProducts = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadproduct(data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncCreateProduct = (products) => async (dispatch, getState) => {
  try {
    await axios.post("/products", products);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.log(error);
  }
};

