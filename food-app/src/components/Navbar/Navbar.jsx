import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assests';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin, isLogin}) => {
  const [menu, setMenu] = useState('home');
  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>

     <Link to="/"> <img src={assets.logoz} alt='logo' className='logo' /></Link>

      <ul className="navbar-menu">
        <Link to="/" className={menu=== "home" ?"active":""} onClick={()=> setMenu("home")}>home</Link>
        <a href='#explore-menu' className={menu=== "menu" ?"active":""} onClick={()=> setMenu("menu")}>menu</a>
        <a href='#app-download' className={menu=== "mobile-app" ?"active":""}  onClick={()=> setMenu("mobile-app")}>mobile-app</a>
        <a href='#footer' className={menu=== "contact" ?"active":""} onClick={()=> setMenu("contact")}>contact us</a>
      </ul>

      <div className="navbar-right">
      
        {/* <img src={assets.search_icon} alt="search_icon" /> */}
        <div className="navbar-search-icon">
         <Link to="/cart"> <img src={assets.basket_icon} alt="basket_icon" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {
          isLogin
          ?<Link to="/user"><img className='profile' src={assets.profile_icon} alt="profile_icon" /></Link>
          : <button onClick={()=> setShowLogin(true)}>sign in</button>
        }
       
      </div>
      
    </div>
  )
}

export default Navbar