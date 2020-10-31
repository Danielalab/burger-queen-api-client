import React from 'react';
import Header from '../components/Header';
import OrderTable from '../components/kitchen/OrderTable';

const KitchenPage = () => (
  <>
    <Header />
    <div className="d-flex main-container">
      <OrderTable />
    </div>
  </>
);

export default KitchenPage;
