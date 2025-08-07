import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const {getTotalCartAmount,cartItems} =useContext(StoreContext);
// console.log(cartItems);
const [details, setDetails] = useState({
  fname:"",
  lname:"",
  email:"",
  street:"",
  city:"",
  state:"",
  code:"",
  country:"",
  phone:""


});
const [formFilled, setFormFilled] =useState(false)

  const navigate = useNavigate()
  const handleChange =(e) => {
    setDetails(prev => ({
       ...prev, [e.target.name]:e.target.value
    }))
  }
  return (
    <div>
      <form  className="place-order">

        <div className="place-order-left">

          <p className='title'>Delivery Information</p>

          <div className="multi-fields">
          <input onChange={handleChange}  value={details.fname} name='fname' type="text" placeholder='First name' />
          <input onChange={handleChange}   value={details.lname} name='lname' type="text" placeholder='Last name' />
          
          </div>
          <input onChange={handleChange}  value={details.email} name='email' type="text" placeholder='Email' />
          <input onChange={handleChange}  value={details.street} name='street' type="text" placeholder='Street' />
           <div className="multi-fields">
          <input onChange={handleChange}  value={details.city} name='city' type="text" placeholder='City' />
          <input onChange={handleChange}  value={details.state} name='state' type="text" placeholder='State' />
          
          </div>
           <div className="multi-fields">
          <input onChange={handleChange}  value={details.code} name='code' type="text" placeholder='Zip Code ' />
          <input onChange={handleChange}  value={details.country} name='country' type="text" placeholder='Country' />
          
          </div>
          <input onChange={handleChange} value={details.phone} name='phone' type="text" placeholder='Phone'/>
          
        </div>
        <div className="place-order-right">
           <div className="cart-total">
        <h2>Cart Totals</h2>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>   
            <b>${getTotalCartAmount() + 2}</b>
          </div>
        
        </div>
        <button onClick={(e) => {
            e.preventDefault(); 
             const allFilled = Object.values(details).every(val => val.trim() !== "");
    
              if (!allFilled) {
                alert("Please fill in all the details.");
                return;
                 }
            navigate('/delivery');
            }}>
          PROCEED TO PAYMENT
        </button>
      </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder