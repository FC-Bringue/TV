import React from 'react';
import logo from './logo.svg';



function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid justify-content-start">
    <a className="navbar-brand" href="#"> LOGO  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <h3>LE MACUMBA</h3>
    <a className="navbar-brand ms-auto" href="#"> QRCode  </a>
    
    
  </div>
</nav>
  );
}

export default Header;
