import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import User from './pages/User/User'
import Delivery from './pages/Delivery/Delivery'

const App = () => {
  const [showLogin ,setShowLogin] =useState(false);
  const [isLogin ,setIsLogin] = useState(false);

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}  setIsLogin={setIsLogin}/>: <></>}
    <div className='app'>
      <Navbar isLogin={isLogin} setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/user' element={<User/>}/>
        <Route path='/delivery' element={<Delivery/>}></Route>
      </Routes>
    
    </div>
    <Footer/>
    </>
  )
}

export default App