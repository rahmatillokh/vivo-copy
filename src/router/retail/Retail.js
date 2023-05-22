import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./css/retail.css";
import { CiLocationOn } from "react-icons/ci";

function Retail() {
  return (
    <>
      <div className="retail">
        <Navbar />

        <div className="input">
          <h1>Retailers</h1>
          <p>Find the retailers near you</p>
          <div className="loc">
            <CiLocationOn className="location" />
            <input type="text" placeholder={` Select your location`} />
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769723.357267589!2d70.60039596393187!3d41.09670484375814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a4c708e5b54231%3A0x4e71cd6bb0e2df44!2sNamangan%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1684320968588!5m2!1sen!2s"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="div"></div>
    </>
  );
}

export default Retail;
