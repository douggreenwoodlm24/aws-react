import React, { Component } from "react";
import MenuLinksData from "../data/MenuLinks.json";

class Header extends Component {
  render() {
    return (
      <header id="intro">
        <article className="fullheight">
          <div className="hgroup">
            <h1>Landon Hotel</h1>
            <h2>West London</h2>
            <p>
              <a href="#welcome">
                <img
                  src="https://landonhotel.com/images/misc/arrow.png"
                  alt="down arrow"
                />
              </a>
            </p>
          </div>
        </article>

        <nav id="nav">
          <div className="navbar">
            <div className="brand">
              <a href="#welcome">
                Landon <span>Hotel</span>
              </a>
            </div>
            <ul>
              {MenuLinksData.map((item, i) => (
                <li key={i}>
                  <a className={`icon ${item.class}`} href={item.href}>
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
