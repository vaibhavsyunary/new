import React, { useContext, useState } from 'react';
import './Delivery.css';
import { StoreContext } from '../../context/StoreContext';

const Delivery = () => {
  const { cartItems, food_list } = useContext(StoreContext);
   const [status,setStatus] =useState('Food processing');

   setTimeout(() => {
    setStatus("Out For Delivery")
   }, 3000);

  return (
    <div className='delivery-page'>
      <h1>My Orders</h1>
      {
        food_list.map((item) => {
          const quantity = cartItems[item._id];
          if (quantity > 0) {
            return (
              <div key={item._id} className='delivery-item'>
                <div className='delivery-item-list'>
                  <h4>{item.name} X {quantity}</h4>
                  <p>Quantity:{quantity} </p>
                  <p>Price: ${item.price * quantity}</p>
                  <p>{status}</p>
                </div>
              </div>
            );
          }
          return null;
        })
      }
    </div>
  );
};

export default Delivery;
