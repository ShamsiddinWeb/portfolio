import React from "react";
import "./About.css"
import Image from "next/image";
import n from "../../assets/images/n.jpg"
import Link from "next/link";

const About = () => {
  return (
    <section class="about" id="about">
      <div class="title reveal">
        <div class="section-title">About Me</div>
      </div>
      <div class="content">
        <div class="column col-left reveal">
          <div class="img-card">
            <Image src={n} width={600} height={600} alt="n"/>
          </div>
        </div>
        <div class="column col-right reveal">
          <h2 class="content-title">Hey there! I'm Shamsiddin Norov</h2>
          <p class="paragraph-text">
            Officiis, eos pariatur esse velit veritatis reiciendis cum quod
            possimus quas? Modi adipisci odit voluptatem tempora error
            perferendis quisquam, dolores iure, ullam id nam quaerat dolor
            incidunt, ratione aliquam deserunt eaque explicabo nostrum quo
            veniam expedita distinctio dolorem. Aspernatur consectetur eum vitae
            nobis.
          </p>
          <br />
          <p class="paragraph-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            corporis ullam deserunt debitis. Rerum necessitatibus accusantium,
            ipsa, officiis, eos pariatur esse velit veritatis reiciendis cum
            quod possimus quas? Modi adipisci odit voluptatem tempora error
            perferendis quisquam, dolores iure, ullam id nam
          </p>
          <Link href="#" class="btn">
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
