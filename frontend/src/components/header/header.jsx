import React from 'react';
import './header.css'

const Header = () => {
  return (
    <div className="header">
       <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients. Our mission is to satisfy your cravings and elevate you dining experience, one meal at a time  </p>
        <button>View menu</button>
       </div>
    </div>
  );
};

export default Header;
