// 

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbRoute } from "react-icons/tb";
import { MdOutlineReport } from "react-icons/md";
import './Menu.css';
import ConducteurIcon from "../../assets/ConducteurIcon.svg";
import PassagerIcon from "../../assets/PassagerIcon.svg";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleBurgerMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='menu'>
      <div className={`burger-menu ${showMenu ? 'active' : ''}`} onClick={handleBurgerMenuClick}>
        <div className='burger-line'></div>
        <div className='burger-line'></div>
        <div className='burger-line'></div>
      </div>
      <div className={`item ${showMenu ? 'show' : ''}`}>
        <Link to="/" className='listItem'>
          <img src={ConducteurIcon} alt="icon" />
          <span>Conducteurs</span>
        </Link><br />
        <Link to="/" className='listItem'>
          <img src={PassagerIcon} alt="icon" />
          <span>Passagers</span>
        </Link><br />
        <Link to="/" className='listItem'>
          <TbRoute className='icon' />
          <span>Trajets</span>
        </Link><br />
        <Link to="/" className='listItem'>
          <MdOutlineReport className='icon' />
          <span>Reclamation</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
