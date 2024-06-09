import React from "react";
import "./Services.css";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { FaCentercode } from "react-icons/fa";
import { IoLogoCodepen } from "react-icons/io5";

const Services = () => {
  return (
    <section class="services" id="services">
      <div class="title reveal">
        <div class="section-title">My Services</div>
        <p class="services__p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
          molestias accusamus modi molestiae praesentium ipsam doloribus
          repudiandae, reiciendis nesciunt consectetur distinctio dignissimos,
          vel suscipit ipsum consequatur adipisci sed sint provident?
        </p>
      </div>
      <div class="content">
        <div class="card reveal">
          <div class="service-icon">
            <FaCentercode />
          </div>
          <div class="info">
            <h3>Web Developer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div class="card reveal">
          <div class="service-icon">
            <BsFillFileEarmarkCodeFill />
          </div>
          <div class="info">
            <h3>Web Developer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div class="card reveal">
          <div class="service-icon">
          <IoLogoCodepen />
          </div>
          <div class="info">
            <h3>Web Developer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
