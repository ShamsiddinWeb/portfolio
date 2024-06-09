import React from "react";
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer">
      <span class="footer-title">Shamsiddin Norov</span>
      <p>Copyright @2021. All Rights Reserved.</p>
      <div class="header-menu-contact">
        <a class="header-menu-call" href="Tel:+998940337212">
          <FaPhoneAlt />
        </a>
        <a class="header-menu-telegram" href="https://t.me/shamsiddin_1101">
          <FaTelegramPlane />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
