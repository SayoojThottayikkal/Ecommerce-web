export const generateDiscount = (products) => {
  return products.map((item) => {
    const discount = Math.floor(Math.random() * 36) + 5;
    return {
      ...item,
      discount,
    };
  });
};
