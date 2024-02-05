import React, { useState,useEffect } from "react";
import "./Event.css";
// import cricket from "./cricket.jpg";
import Model from "./Model";
import Football from "../images/foot.png";
import chess from "../images/chess.png";
import volleyball from "../images/volley.png";
import cricketsvg from "../images/cricket.png";
import kabaddi from "../images/kabaddi.png";
import basketball from "../images/basketball.svg";
import basketball2 from "../images/basket.png";
import handball from "../images/hand.png";
import download from "../images/download.png"



const sportsData = [
  { image: cricketsvg, name: "Cricket",boys:"1200₹",girls:"1200₹" },
  { image: Football, name: "Football",boys:"1200₹",girls:"1200₹" },
  { image: Football, name: "RingFootball",boys:"1200₹",girls:"1200₹" },
  { image: chess, name: "Chess",boys:"1200₹",girls:"1200₹" },
  { image: volleyball, name: "Volleyball",boys:"1200₹",girls:"1200₹" },
  { image: kabaddi, name: "Kabaddi" ,boys:"1200₹",girls:"1200₹"},
  { image: handball, name: "Handball",boys:"1200₹",girls:"1200₹" },
  { image: basketball2, name: "Basketball",boys:"1200₹",girls:"1200₹" },
];
const Event = () => {
  const [Pop, setPop] = useState(false);
   
  
  return (
    <div className="main-container">
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
              <p className="fees">
                Entry Fee: </p>
                <div className="price">
                <p>
                Boys: ₹2500
                <br />
                Girls: X</p>  </div>
             
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
        <div className="pop">{Pop && <Model  onClose={() => setPop(false)} />}</div>
      </div>
    </div>
  );
};

export default Event;
