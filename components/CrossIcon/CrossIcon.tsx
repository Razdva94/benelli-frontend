import React from 'react';
import './crossIcon.css';

const CrossIcon: React.FC<any> = ({ onClose }) => {
  return (
    <div className='menu-btn' onClick={() => onClose()}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default CrossIcon;
