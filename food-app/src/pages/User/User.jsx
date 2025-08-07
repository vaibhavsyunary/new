import React from 'react'
import './User.css'

const User = () => {
  const uservalues = JSON.parse(localStorage.getItem('info'))
  return (
    <div className='user-container'>
      <h1>Your Account</h1>
      <p>{uservalues.username}</p>
      <p>{uservalues.email}</p>
    </div>
  )
}

export default User