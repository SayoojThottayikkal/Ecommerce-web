import apiClient from "./apiClient";

export const getAllProducts = async () => {
  const response = await apiClient.get("products");
  return response.data;
};

export const getProductById = async (id) => {
  const response = await apiClient.get(`products/${id}`);
  return response.data;
};

export const getCategories = async () => {
  const response = await apiClient.get("products/categories");
  return response.data;
};

export const createProduct = async (productData) => {
  const response = await apiClient.post("products", productData);
  return response.data;
};

export const updateProduct = async (id, updatedData) => {
  const response = await apiClient.put(`products/${id}`, updatedData);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await apiClient.delete(`products/${id}`);
  return response.data;
};
