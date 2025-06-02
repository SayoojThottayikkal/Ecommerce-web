import axios from "axios";
const BASE_URL = "https://fakestoreapi.com/";

export const getCategories = () => {
  axios
    .get(BASE_URL + "")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("error fetching categories", error);
      throw error;
    });
};
