import styles from "./footer2.module.css";
import React from "react";
import logo from "../Images/logo.png";
import logo2 from "../Images/logo2.png";
import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";

const Footer2 = () => {
  return (
    <div className={styles.whole}>
      <div className={styles.up}>
        <div className={styles.left}>
          <img
            src={logo}
            className={styles.img}
            alt="image"
          ></img>
        </div>
        <div className={styles.middle}>
          <div className={styles.middle1}>
            <div className={styles.ul}>
              <div className={styles.links}>
                <a href="#">HOME</a>
              </div>
              <div className={styles.links}>
                <a href="#">EVENT</a>
              </div>
              <div className={styles.links}>
                <a href="#">OUR TEAM</a>
              </div>
              <div className={styles.links}>
                <a href="#">REGISTER</a>
              </div>
            </div>
          </div>
          <div className={styles.middle2}>View Brochure</div>
          <div className={styles.middle3}>
            <div className={styles.ulsocila}>
              <div>
                <a href="https://www.instagram.com/zenith_sggs?igsh=djNob2lwbXg2aGdi">
                  <Mail />
                </a>
              </div>
              <div>
                <a href="mailto:zenith@sggs.ac.in">
                  <Mail />
                </a>
              </div>
              <div>
                <a href="https://sggszenith.in/tel:+919359502953">
                  <Phone />
                </a>
              </div>
              <div>
                <a href="https://goo.gl/maps/qdH2ab7UjYGfyPJs6">
                  <MapPin />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <iframe
            className={styles.mapp}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8903382147096!2d77.28986337520624!3d19.1124661820997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce29b9903d053d%3A0x2c5238a90ab55c03!2sShri%20Guru%20Gobind%20Singhji%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1707137303264!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
      <div className={styles.down}>
        ©2024 Zenith Web Team | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer2;
