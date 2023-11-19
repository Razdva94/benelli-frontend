import React from 'react';
import './BurgerIcon.css'

const BurgerIcon:React.FC<any> = ({handleNavOpen, navOpen}) => {
  
  return (
    <div onClick={handleNavOpen} className={`menu-btn ${navOpen && 'menu-btn_active'}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerIcon;
