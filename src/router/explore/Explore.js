import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./css/explore.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { EXPLORE, EXPLORE__CATEGORY } from "../../static/data";

function Explore() {
  return (
    <div className="explore__bolim">
      <div className="explore">
        <Navbar />
        <h1>
          Enjoy the
          <br />
          extraordinary
        </h1>
        <p>
          Create extraordinary for consumers with
          <br />
          technology and fashion at all times
        </p>
        <a className="row" href="#">
          Learn More <AiOutlineArrowRight />
        </a>
      </div>
      <div className="explore__tag">
        <a href="#">
          Learn More <AiOutlineArrowRight />
        </a>
      </div>

      <div className="android-14">
        <div className="left">
          <img
            src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1683772980721/dcc50623fa39701396b88b13f3b0f4c5.png"
            alt=""
          />
        </div>
        <div className="right">
          <h3>
            Global technology brand vivo
            <br />
            today announced Android 14 <br />
            Beta 1 will be available on vivo <br />
            X90 Pro and iQOO 11 <br />
            smartphones in Southeast Asia
          </h3>
          <h2>
            vivo Releases <br /> Android 14 Beta...
          </h2>
          <p>SHENZHEN, China, May 11, 2023</p>
        </div>
      </div>
      <div className="explore__category">
        {EXPLORE__CATEGORY?.map((item, id) => (
          <div className="category" key={id}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="explore__life">
        {EXPLORE?.map((item, id) => (
          <div className="explore__vivo">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
            <a href="#">
              Learn More <AiOutlineArrowRight />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
