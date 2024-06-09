import React from "react";
import "./Work.css";
import work1 from "../../assets/images/work1.jpg";
import work2 from "../../assets/images/work2.jpg";
import work3 from "../../assets/images/work3.jpg";
import work4 from "../../assets/images/work4.jpg";
import work5 from "../../assets/images/work5.jpg";
import work6 from "../../assets/images/work6.jpg";
import Image from "next/image";

const Work = () => {
  return (
    <section class="work" id="work">
      <div class="title reveal">
        <div class="section-title">My Work</div>
      </div>
      <div class="content">
        <div class="card reveal">
          <div class="card-img">
            <Image
              class="card1"
              src={work1}
              alt="nimadir"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div class="card reveal">
          <div class="card-img">
            <Image
              class="card2"
              src={work2}
              alt="nimadir"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div class="card reveal">
          <div class="card-img">
            <Image
              class="card3"
              src={work3}
              alt="nimadir"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div class="card reveal">
          <div class="card-img">
            <Image
              class="card4"
              src={work4}
              alt="nimadir"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div class="card reveal">
          <div class="card-img">
            <Image
              class="card5"
              src={work5}
              alt="nimadir"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div class="card reveal">
          <div class="card-img">
            <Image
              class="card6"
              src={work6}
              alt="nimadir"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div class="title reveal">
          <a href="#" class="btn">
            See All
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
