import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/";

export const getCategories = async () => {
  try {
    const response = await axios.get(BASE_URL + "products/categories");
    return response.data;
  } catch (error) {
    console.log("Error fetching categories:", error);
    throw error;
  }
};
