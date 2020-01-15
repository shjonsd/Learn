import React from 'react'
import logo from './logo.svg'

const logoStyle = {
  float: "left",
  width: "197px",
};

export const Logo = () => <a style={logoStyle} href="/"><img src={logo} alt="That's my logo" /></a>
