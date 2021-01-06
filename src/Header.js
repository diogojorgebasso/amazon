import React from 'react';
import { View } from 'react-native';

export default function src() {
 return (
    <div className="header">
      <img className="headerLogo" src="../public/amazonlogo.png" alt="Amazon Logo" />
      <div className="headerSearch">
        <input type="text" className="headerSearchInput"/>
      
      </div>
      <div className="headerNav">
        <div className="headerOption">
          <span className="HeaderHello">Hello Guest</span>
          <span className="HeaderHello">Sign In</span>
        </div>
        <div className="headerOption">
          <span className="HeaderReturns">Return</span>
          <span className="HeaderHello">& orders</span>
        </div>
        <div className="headerOption"></div>
          <span className="HeaderHello">Your</span>
          <span className="HeaderHello">Prime</span>
      </div>
    </div>
  );
}