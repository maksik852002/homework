import React from 'react';
import logo from './img/logo.png'

function Header() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#somelink"><img className="pb-1" width="30px" src={logo} alt="logo"/>Cinema</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#somelink">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#somelink">Ticets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#somelink">On-line</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#somelink">Music</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#somelink">Poster</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Header;
