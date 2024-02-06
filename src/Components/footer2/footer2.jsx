import styles from "./footer2.module.css";
import React from "react";
import logo from "../Images/logo.png";
import logo2 from "../Images/logo2.png";
// import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";

const Footer2 = () => {
  return (
    <div className={styles.whole}>
      <div className={styles.up}>
        <div className={styles.left}>
          <img src={logo2} className={styles.img}></img>
        </div>
        <div className={styles.middle}>
          <div className={styles.middle1}>
            <ul className="ul">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Event</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </div>
          <div className={styles.middle2}></div>
          <div className={styles.middle3}></div>
        </div>
        <div className={styles.right}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8903382147096!2d77.28986337520624!3d19.1124661820997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce29b9903d053d%3A0x2c5238a90ab55c03!2sShri%20Guru%20Gobind%20Singhji%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1707137303264!5m2!1sen!2sin"
            style={{
              width: "400",
              height: "300",
              borderRadius: "16px",
              allowFullScreen: "",
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade",
            }}
          ></iframe>
        </div>
      </div>
      <div className={styles.down}></div>
    </div>
  );
};

export default Footer2;
