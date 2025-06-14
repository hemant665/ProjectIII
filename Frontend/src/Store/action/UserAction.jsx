/* eslint-disable no-unused-vars */

import axios from "../../Api/axiosconfig";
import { loaduser } from "../reducers/UserSlice";

export const asyncCurrentUser = (user) => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("User"));
    if (user) dispatch(loaduser(user));
    else console.log("User not found");
  } catch (error) {
    console.log(error);
  }
};

export const asyncuserlogout = (user) => async (dispatch, getState) => {
  try {
    localStorage.removeItem("User", null);
  } catch (error) {
    console.log(error);
  }
};

export const asyncuserlogin = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`,
      user
    );
    console.log(data[0]);
    localStorage.setItem("User", JSON.stringify(data[0]));
  } catch (error) {
    console.log(error);
  }
};

export const asyncregisteruser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    // console.log(res);
  } catch (error) {
    console.log(error);
  }
};
