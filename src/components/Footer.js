import React from 'react';

import ryanLogo from '../assets/ryan_logo_white.png';

function Footer() {
  return (
    <footer id="Footer" className="footer has-text-light">
      <div className="content has-text-centered">
        <p>
          <span>Made with </span>
          <span className="has-text-red">❤</span>
          <span> by Ryanites.</span>
        </p>
        <br />
        <img src={ryanLogo} className="footer-logo" alt="Ryan Logo" />
      </div>
    </footer>
  );
}

export default Footer;
