import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  mobilePhoto,
  v27,
  v27pro,
  v27svg,
  vivoDesign,
  x80,
  x90,
  x90svg,
  x90video,
} from "../../assets";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="main">
        <Navbar />
        <div className="text">
          <img className="v27" src={v27svg} alt="" />
          <p>
            Aura Portrait <br /> Delight Every Moment
          </p>
          <div className="links">
            <a href="#">
              V27 Pro <AiOutlineArrowRight className="arrow" />
            </a>
            <a href="#">
              V27e <AiOutlineArrowRight className="arrow" />
            </a>
          </div>
        </div>
      </div>

      {/* x90, x80 */}

      <div className="x90__series">
        <div className="text">
          <img className="x90" src={x90svg} alt="" />
          <h2>Pro Photography in Pocket</h2>
          <div className="links">
            <a href="#">
              X90 Pro <AiOutlineArrowRight className="arrow" />
            </a>
            <a href="#">
              X90 <AiOutlineArrowRight className="arrow" />
            </a>
          </div>
        </div>
        <img className="bg" src={x90} alt="" />
      </div>
      <div className="x80__series">
        <img src={x80} alt="" />
      </div>

      {/* DISCOVER */}

      <h1 className="discover__title">Discover</h1>
      <div className="discover">
        <div className="left">
          <div className="item1 item">
            <div className="text">
              <p>vivo VESION +</p>
              <h3>
                Mobile Photo Awards 2023 <br />
                2022.11.22 - 2023.05.08
              </h3>
            </div>
            <img src={mobilePhoto} alt="" />
          </div>
          <div className="item2 item">
            <img src={v27pro} alt="" />
            <div className="text">
              <p>Video </p>
              <h3>V27 pro</h3>
            </div>
          </div>
        </div>
        <div className="center item">
          <div className="text">
            <p>Brand News</p>
            <h3>V27 Series Launch</h3>
          </div>
          <img src={v27} alt="" />
        </div>
        <div className="rigth">
          <div className="item1 item">
            <img src={x90video} alt="" />
            <div className="text">
              <p>Video</p>
              <h3>X90 Series</h3>
            </div>
          </div>
          <div className="item2 item">
            <div className="text">Vivo Design</div>
            <img src={vivoDesign} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
