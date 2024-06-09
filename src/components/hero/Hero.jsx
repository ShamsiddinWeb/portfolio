import React from "react";
import "./Hero.css";
import Link from "next/link";

const Hero = () => {
  return (
    <section class="main" id="main">
      <div class="content">
        <h2>
          Hello, I'm <br />
          <span> Shamsiddin Norov </span>
        </h2>
        <div class="animated-text">
          <h3>Web Developer</h3>
          <h3>Web Developer</h3>
          <h3>Web Developer</h3>
        </div>
        <Link href="indexx.html" class="btn">
          See My Work
        </Link>
        <div class="media-icons">
          <Link href="#">
            <i class="fab fa-facebook-f"></i>
          </Link>
          <Link href="#">
            <i class="fab fa-instagram"></i>
          </Link>
          <Link href="#">
            <i class="fab fa-twitter"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
