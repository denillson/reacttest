import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
        <nav class="navbar default-layout">
        <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
          <a class="navbar-brand brand-logo" href="index.html">
            <img className="app-logo" src="../img/logo.png" alt="logo"></img>
          </a>
        </div>
        <div class="navbar-menu-wrapper">
          <ul class="navbar">
                <li className="li-nav"><a href="#">EMPRESA</a></li>
                <li className="li-nav"><a href="#">SERVIÇOS</a></li>
                <li className="li-nav"><a href="#">CONTATO</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
