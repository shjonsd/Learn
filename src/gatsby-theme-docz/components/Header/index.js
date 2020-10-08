import React from 'react'
import "../styles/global.css"
import logo from './logo.svg'


export const Header = ({ children }) => {
  return (
    <div className="header">
      <div>
      <a className="logo" href="/"><img src={logo} alt="Klappir Logo" /></a>
      </div>
      <div className="links">
      <a className="headerLink" href="https://klappir.com">Klappir.com</a>
      <a className="headerLinkButton" href="https://core.klappir.io">Sign in</a>
      </div>
      {children}
    </div>
  );
};
