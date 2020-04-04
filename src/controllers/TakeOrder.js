export const filterProductsByCategory = (products, category) => (
  products.filter((product) => product.type === category)
);

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

export const deleteProduct = (orderProducts, idProduct) => (
  orderProducts.filter((product) => product._id !== idProduct)
);

export const subtractQuantityOfProduct = (orderProducts, idProduct) => (
  orderProducts.reduce((accumulator, currentValue) => {
    if (currentValue._id !== idProduct) {
      return [...accumulator, currentValue];
    }
    if (currentValue.qty - 1 > 0) {
      return [...accumulator, { ...currentValue, qty: currentValue.qty - 1 }];
    }
    return accumulator;
  }, [])
);
