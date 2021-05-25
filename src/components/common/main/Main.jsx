/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import logo from "./../../images/site-logo.svg";
import intro from "./../../images/intro.svg";
import { servicesList } from "./serviceslist.js";
import "./Main.css";
import Typical from "react-typical";

class Main extends Component {
  state = {};
  render() {
    return (
      <main>
        <section className="container intro-section">
          <div className="left-side">
            <img className="site-logo" src={logo} alt="site-logo" />
            <h1>IT-Аутсорсинг Компания</h1>
            <p className="typical-text">
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Мобилъная разработка",
                  1000,
                  "ERP системы",
                  1000,
                  "UI / UX Дизайн",
                  1000,
                  "Оптимизатсия инфраструктуры",
                  1000,
                  "IT Консултинг",
                ]}
              />
            </p>
            <a className="connection-link" href="/">
            Cвязаться
          </a>
          </div>
          <div className="right-side">
            <img src={intro} alt="intro" />
          </div>
        </section>
        <section className="services-section container" path="/services-section">
          <h1>Наши услуги</h1>
          <ul className="services-list">
            {servicesList.map((item, index) => {
              return (
                <li key="index" className="services-item">
                  <a href="/" className="services-link">
                    <img src={item.serviceImg}/>
                    <p>{item.serviceName}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    );
  }
}

export default Main;
