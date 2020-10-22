import React from 'react'
import "../styles/global.css"
import logo from './logo.svg'


export const Header = ({ children }) => {
  return (
    <div className="header">
      <div>
      <a className="logo" href="/"><img src={logo} alt="Klappir Logo" /></a>
      </div>
      {children}
    </div>
  );
};
