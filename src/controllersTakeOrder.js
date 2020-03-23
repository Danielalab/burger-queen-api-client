export const findProductById = (orderProducts, newProduct) => (
  orderProducts.find((product) => product._id === newProduct._id)
);

export const addProduct = (orderProducts, newProduct) => {
  if (!orderProducts) {
    return [{ ...newProduct, qty: 1 }];
  }
  if (findProductById(orderProducts, newProduct)) {
    return orderProducts.map((product) => ((product._id === newProduct._id)
      ? ({ ...product, qty: product.qty + 1 })
      : product));
  }
  return [
    ...(orderProducts.map((product) => ({ ...product }))),
    { ...newProduct, qty: 1 }];
};
