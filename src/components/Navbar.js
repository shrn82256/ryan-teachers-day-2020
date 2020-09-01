import React from 'react';

import ryanLogo from '../assets/ryan_logo.jpg';

function Navbar() {
  return (
    <div id="Navbar">
      <img className="navbar-logo" src={ryanLogo} alt="Ryan Logo" />
      <div>Night mode button</div>
    </div>
  );
}

export default Navbar;
