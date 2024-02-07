import React, { useState, useEffect } from "react";
import "./Event.css";
import Model from "./Model";
import Football from "../Images/foot.png";
import chess from "../Images/chess.png";
import volleyball from "../Images/volley.png";
import cricketsvg from "../Images/cricket.png";
import kabaddi from "../Images/kabaddi.png";
import Football2 from "../Images/foot2.png";
import basketball from "../Images/basketball.svg";
import basketball2 from "../Images/basket.png";
import handball from "../Images/hand.png";
import download from "../Images/download.png";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer2/footer2.jsx";

const sportsData = [
  { image: cricketsvg, name: "Cricket", boys: "1200₹", girls: "1200₹" },
  { image: Football, name: "Football", boys: "1200₹", girls: "1200₹" },
  { image: Football2, name: "RingFootball", boys: "1200₹", girls: "1200₹" },
  { image: chess, name: "Chess", boys: "1200₹", girls: "1200₹" },
  { image: volleyball, name: "Volleyball", boys: "1200₹", girls: "1200₹" },
  { image: kabaddi, name: "Kabaddi", boys: "1200₹", girls: "1200₹" },
  { image: handball, name: "Handball", boys: "1200₹", girls: "1200₹" },
  { image: basketball2, name: "Basketball", boys: "1200₹", girls: "1200₹" },
];

const Event = () => {
  const [Pop, setPop] = useState(false);

  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className={Pop ? "blur-background" : ""}></div>
        <div className="heading">
          <h1>Events</h1>
        </div>
        <div className="wrapper">
          {sportsData.map((sport, index) => (
            <div className="card1" key={index}>
              <div className="img">
                <img src={sport.image} alt="" />
              </div>
              <h2>{sport.name}</h2>
              <div className="info">
                <h2>{sport.name}</h2>
                <p className="fees">Entry Fee: </p>
                <div className="price">
                  <p>
                    Boys: ₹2500
                    <br />
                    Girls: X
                  </p>{" "}
                </div>

                <div className="btns">
                  <button className="btn" onClick={() => setPop(true)}>
                    View More
                  </button>
                  <button className="download">
                    <img src={download}></img>
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="pop">
            {Pop && <Model onClose={() => setPop(false)} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Event;
