import React from 'react';

import banner from '../assets/banner.png';

function Navbar() {
  return (
    <div id="Navbar" className="columns is-multiline">
      <div className="column is-6 is-offset-3">
        <img className="navbar-banner" src={banner} alt="Happy Teachers Day" />
      </div>
    </div>
  );
}

export default Navbar;
