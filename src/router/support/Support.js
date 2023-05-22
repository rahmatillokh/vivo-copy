import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./css/support.css";
import { FAQs, support__links, support__services } from "../../static/data";
import { FiArrowRight, FiMessageSquare } from "react-icons/fi";

function Support() {
  return (
    <div className="support__bolim">
      <div className="support">
        <Navbar />
        <h2>Welcome to vivo Support</h2>
        <p>Connect with us, your satisfaction starts here</p>
        <input type="search" placeholder="Search for support" />
        <div className="support__links">
          {support__links?.map((item, id) => (
            <a href="#" key={id}>
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="support__services">
        {support__services?.map((item, id) => (
          <div className="service" key={id}>
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <h2 className="faqs__title">FAQs</h2>
      <div className="faqs">
        <div className="item">
          {FAQs?.map((item, id) => (
            <p key={id}>
              {item} <FiArrowRight className="icon" />
            </p>
          ))}
        </div>
        <a href="#">
          Learn More <FiArrowRight />
        </a>
      </div>
      <div className="contact">
        <h2>Contact Us</h2>
        <div className="mail">
          <div className="contact__title">
            <FiMessageSquare size="40px" />
            <p>Email us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
