import React from 'react';
import '../../css/kitchen.css';

import getTotalOrder from '../../controllers/Kitchen';

const getDateFormat = (date) => {
  // sometimes even the US needs 24-hour time
  const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
    /* timeZone: 'America/Los_Angeles', */
  };
  return (new Intl.DateTimeFormat('en-GB', options).format(date));
  // → "12/19/2012, 19:00:00"
};

const OrderTable = () => {
  const columms = ['ID', 'Client', 'Status', 'Precio', 'Fecha'];
  const rows = [
    {
      _id: 'order123',
      userId: 'user125',
      client: 'Lorem Ipsu',
      products: [
        {
          qty: 1,
          product: {
            _id: 'product126', name: 'Hamburgersa doble de carne', price: 7, type: 'menu', dateEntry: new Date(),
          },
        },
      ],
      status: 'pending',
      dateEntry: new Date(),
      dateProcessed: new Date(),
    },
    {
      _id: 'order124',
      userId: 'user125',
      client: 'Lorem Ipsu',
      products: [
        {
          qty: 1,
          product: {
            _id: 'product127', name: 'Hamburgersa doble de pollo', price: 7, type: 'menu', dateEntry: new Date(),
          },
        },
        {
          qty: 1,
          product: {
            _id: 'product126', name: 'Hamburgersa doble de carne', price: 7, type: 'menu', dateEntry: new Date(),
          },
        },
      ],
      status: 'delivering',
      dateEntry: new Date(),
      dateProcessed: new Date(),
    },
  ];
  return (
    <table className="d-flex flex-direction-column p-1">
      <thead>
        <tr className="p-1 text-bold">
          { columms.map((name) => <th>{name}</th>) }
        </tr>
      </thead>
      <tbody>
        { rows.map((rowData) => (
          <tr
            key={rowData._id}
            className="p-1"
          >
            <td>
              #
              {rowData._id}
            </td>
            <td>{rowData.client}</td>
            <td>{rowData.status}</td>
            <td>{getTotalOrder(rowData.products)}</td>
            <td>{getDateFormat(rowData.dateEntry)}</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
};

export default OrderTable;
