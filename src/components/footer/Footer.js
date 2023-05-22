import React from "react";
import { EXPLORE__VIVO, POPULAR__LINKS, SUPPORT } from "../../static/data";

import {
  FiMessageSquare,
  FiGlobe,
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer__bolim">
      <div className="footer">
        <ul className="collection">
          Popular Links
          {POPULAR__LINKS?.map((item, id) => (
            <li className="item" key={id}>
              {item}
            </li>
          ))}
        </ul>
        <ul className="collection">
          Support
          {SUPPORT?.map((item, id) => (
            <li className="item" key={id}>
              {item}
            </li>
          ))}
        </ul>
        <ul className="collection">
          Explore Vivo
          {EXPLORE__VIVO?.map((item, id) => (
            <li className="item" key={id}>
              {item}
            </li>
          ))}
        </ul>
        <div className="social">
          <div className="email">
            <FiMessageSquare size="16px" />
            Email US (Reply in 24h)
          </div>
          <FiFacebook className="tarmoq" />
          <FiInstagram className="tarmoq a" />
          <FiYoutube className="tarmoq a" />
          <FiLinkedin className="tarmoq a" />
        </div>
      </div>
      <div className="copy">
        <p>&copy; 2023 vivo Mobile Communication Co., All rigths reserved.</p>
        <div className="quick__links">
          <a href="">Privacy Policy</a>&nbsp;|
          <a href="">Cookie Policy</a>&nbsp;|
          <a href="">Privacy Support</a>&nbsp;|
          <a href="">Warranty Terms</a>&nbsp;|
          <div className="lang">
            <FiGlobe />
            Global-English
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
