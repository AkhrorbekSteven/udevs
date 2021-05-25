/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { menuItems } from "./menuItems";
import logo from "./../../images/site-logo.svg";
import toggleMenu from "./../../images/toggle-menu.png";
import "./Header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <section className="container">
          <img className="site-logo" src={logo} alt="website logo" />
          <ul className="navbar-list">
            {menuItems.map((item, index) => {
              return (
                <li
                  className={
                    item.isActive ? "navbar-item active" : "navbar-item"
                  }
                  key={index}
                  onClick={(index) => {
                    menuItems[index].isActive = !menuItems[index].isActive;
                    console.log("true");
                  }}
                >
                  <a href={item.url} className="navbar-link">
                    {item.title}
                    <img className="down-arrow-link" src={item.downarrow} />
                    <ul className={item.subnavclass}>
                      <h4>{item.subtitle}</h4>
                      {item.subnav.map((item) => {
                        return (
                          <li className="dropdown-item">
                            <a href="/" className="dropdown-link">
                              <img src={item.imgTitle} />
                              <span>{item.text}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </a>
                </li>
              );
            })}
          </ul>
          <a className="connection-link" href="/">
            Cвязаться
          </a>
          <div className="toggle-menu">
              <img src={toggleMenu} alt="" />
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
