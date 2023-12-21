import React from 'react';
import './burgerIcon.css'

const BurgerIcon:React.FC<any> = ({handleNavOpen, navOpen}) => {
  
  return (
    <div onClick={handleNavOpen} className={`menu-brg ${navOpen && 'menu-brg_active'}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerIcon;
