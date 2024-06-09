import React from "react";
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa6";

const Contact = () => {
  return (
    <section class="contact" id="contact">
      <div class="title reveal">
        <div class="section-title">Contact Me</div>
      </div>
      <div class="content">
        <div class="row">
          <div class="card click reveal">
            <div class="contact-icon box-active">
              <FaLocationDot />
            </div>
            <div class="info">
              <h3>Address</h3>
              <span>Tashkent City</span>
            </div>
          </div>
          <div class="card reveal">
            <div class="contact-icon">
              <FaPhone />
            </div>
            <div class="info">
              <h3>Phone</h3>
              <a href="Tel:+998940337212">
                <span>+998940337212</span>
              </a>
            </div>
          </div>
          <div class="card reveal">
            <div class="contact-icon">
              <MdEmail />
            </div>
            <div class="info">
              <h3>Email Address</h3>
              <a href="https://t.me/shamsiddin_1101">
                <span class="hover">shamsiddinnorov734 @gmail.com</span>
              </a>
            </div>
          </div>
          <div class="card reveal">
            <div class="contact-icon">
              <FaGlobe />
            </div>
            <div class="info">
              <h3>Website</h3>
              <span>MyPortfolio.org</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="contact-form reveal">
            <h3>Send Message</h3>
            <div class="input-box">
              <input type="text" placeholder="Name" />
            </div>
            <div class="input-box">
              <input type="text" placeholder="Email"></input>
            </div>
            <div class="input-box">
              <textarea rows="8" cols="80" placeholder="Message"></textarea>
            </div>
            <div class="input-box">
              <input type="submit" class="send-btn" value="Send"></input>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
