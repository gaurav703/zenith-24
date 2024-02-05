import React, { useState,useEffect } from "react";
import "./Event.css";
// import cricket from "./cricket.jpg";
import Model from "./Model";
import Football from "../images/Football.svg";
import chess from "../images/chess.svg";
import volleyball from "../images/volleyball.svg";
import cricketsvg from "../images/cricket.svg";
import kabaddi from "../images/kabaddi.svg";
import basketball from "../images/basketball.svg";
import handball from "../images/handball.svg";



const sportsData = [
  { image: cricketsvg, name: "Cricket",boys:"1200₹",girls:"1200₹" },
  { image: Football, name: "Football",boys:"1200₹",girls:"1200₹" },
  { image: Football, name: "RingFootball",boys:"1200₹",girls:"1200₹" },
  { image: chess, name: "Chess",boys:"1200₹",girls:"1200₹" },
  { image: volleyball, name: "Volleyball",boys:"1200₹",girls:"1200₹" },
  { image: kabaddi, name: "Kabaddi" ,boys:"1200₹",girls:"1200₹"},
  { image: handball, name: "Handball",boys:"1200₹",girls:"1200₹" },
  { image: basketball, name: "Basketball",boys:"1200₹",girls:"1200₹" },
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
              <p>
                Entry Fee(Boys): ₹2500
                <br />
                Entry Fee(Girls): X
              </p>
              <button className="btn" onClick={() => setPop(true)}>
                View More
              </button>
            </div>
          </div>
        ))}
        <div className="pop">{Pop && <Model onClose={() => setPop(false)} />}</div>
      </div>
    </div>
  );
};

export default Event;
