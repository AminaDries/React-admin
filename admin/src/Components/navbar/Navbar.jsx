import React from 'react'
import './Navbar.css'
import LogoImage from '../../assets/LOGO.svg';
import Notification from '../../assets/Notificationicon.svg'
import Settings from '../../assets/Settings.svg'
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={LogoImage} alt="Logo" className="logo" />
        <span>XOXO</span>
      </div>
      <div className="icons">
        <div className='notification'>
          <img src={Notification} alt="" />
          <span>1</span>
        </div>
        <div className='user'>
          <Avatar>H</Avatar>
          <span>Username</span>
        </div>
        <img src={Settings} alt="" />
      </div>
    </div>
  )
}

export default Navbar
