import {
  filterProductsByCategory,
  findProductById,
  addProduct,
  deleteProduct,
  getTotalOrder,
  subtractQuantityOfProduct,
} from '../TakeOrder';

const arrProducts = [
  {
    name: 'Hamburguesa simple de pollo',
    price: 12,
    type: 'desayuno',
    _id: '2abc',
  },
  {
    name: 'Hamburguesa simple de pollo',
    price: 12,
    type: 'menu',
    _id: '4abc',
  },
  {
    name: 'Hamburguesa simple de pollo',
    price: 12,
    type: 'desayuno',
    _id: '5abc',
  },
];

describe('filterProductsByCategory', () => {
  const productsBreakfast = [
    {
      name: 'Hamburguesa simple de pollo',
      price: 12,
      type: 'desayuno',
      _id: '2abc',
    },
    {
      name: 'Hamburguesa simple de pollo',
      price: 12,
      type: 'desayuno',
      _id: '5abc',
    },
  ];
  it('Deberia filtrar los productos de la categoria desayuno', () => {
    expect(filterProductsByCategory(arrProducts, 'desayuno')).toEqual(productsBreakfast);
  });
});

describe('findProductById', () => {
  const product = {
    name: 'Hamburguesa simple de pollo',
    price: 12,
    type: 'desayuno',
    _id: '2abc',
  };

  it('Deberia encontrar un producto con el _id 2abc', () => {
    expect(findProductById(arrProducts, '2abc')).toEqual(product);
  });
});

describe('addProduct', () => {
  const data = [
    {
      name: 'Hamburguesa simple vegetariana',
      price: 12,
      type: 'menu',
      _id: '1abc',
      qty: 2,
    },
    {
      name: 'Hamburguesa simple de pollo',
      price: 12,
      type: 'desayuno',
      _id: '2abc',
      qty: 1,
    },
  ];

  const newProduct = {
    name: 'Hamburguesa simple de carne',
    price: 12,
    type: 'menu',
    _id: '3abc',
  };

  const oldProduct = {
    name: 'Hamburguesa simple vegetariana',
    price: 12,
    type: 'menu',
    _id: '1abc',
    qty: 2,
  };

  it('Deberia agregar un nuevo producto si el arr esta vacio', () => {
    expect(addProduct([], newProduct)).toEqual([{ ...newProduct, qty: 1 }]);
  });

  it('Deberia agregar un producto nuevo al arr sino aun no ha sido agregado', () => {
    const result = data.concat({ ...newProduct, qty: 1 });
    expect(addProduct(data, newProduct)).toEqual(result);
  });

  it('Deberia aumentar la qty a 3 del producto con _id: 1abc, si ya fue agregado', () => {
    const response = [{
      name: 'Hamburguesa simple vegetariana',
      price: 12,
      type: 'menu',
      _id: '1abc',
      qty: 3,
    },
    {
      name: 'Hamburguesa simple de pollo',
      price: 12,
      type: 'desayuno',
      _id: '2abc',
      qty: 1,
    }];

    expect(addProduct(data, oldProduct)).toEqual(response);
  });
});

describe('deleteProduct', () => {
  it('Deberia eliminar un producto con el _id: 4abc', () => {
    const result = [
      {
        name: 'Hamburguesa simple de pollo',
        price: 12,
        type: 'desayuno',
        _id: '2abc',
      },
      {
        name: 'Hamburguesa simple de pollo',
        price: 12,
        type: 'desayuno',
        _id: '5abc',
      },
    ];
    expect(deleteProduct(arrProducts, '4abc')).toEqual(result);
  });
});

describe('subtractQuantityOfProduct', () => {
  const data = [
    {
      name: 'Hamburguesa simple vegetariana',
      price: 12,
      type: 'menu',
      _id: '1abc',
      qty: 2,
    },
    {
      name: 'Hamburguesa simple de pollo',
      price: 12,
      type: 'desayuno',
      _id: '2abc',
      qty: 1,
    },
  ];

  it('Deberia disminuir la qty a 1 del producto con _id: 1abc', () => {
    const response = [{
      name: 'Hamburguesa simple vegetariana',
      price: 12,
      type: 'menu',
      _id: '1abc',
      qty: 1,
    },
    {
      name: 'Hamburguesa simple de pollo',
      price: 12,
      type: 'desayuno',
      _id: '2abc',
      qty: 1,
    }];
    expect(subtractQuantityOfProduct(data, '1abc')).toEqual(response);
  });

  it('Deberia eliminar el producto con _id: 2abc si su qty min es 1', () => {
    const response = [{
      name: 'Hamburguesa simple vegetariana',
      price: 12,
      type: 'menu',
      _id: '1abc',
      qty: 2,
    }];
    expect(subtractQuantityOfProduct(data, '2abc')).toEqual(response);
  });
});

describe('getTotalOrder', () => {
  const data = [
    {
      name: 'Hamburguesa simple vegetariana',
      price: 12,
      type: 'menu',
      _id: '1abc',
      qty: 2,
    },
    {
      name: 'Hamburguesa simple de pollo',
      price: 12,
      type: 'desayuno',
      _id: '2abc',
      qty: 1,
    },
  ];

  it('Deberia retornar 36 para el arr: data', () => {
    expect(getTotalOrder(data)).toBe(36);
  });
});
