import React, { useState, useEffect } from "react";
import "./Event.css";
import Model from "./Model";
import Football from "../Images/foot.png";
import chess from "../Images/chess.png";
import volleyball from "../Images/volley.png";
import cricketsvg from "../Images/cricket.png";
import kabaddi from "../Images/kabaddi.png";
import basketball2 from "../Images/basket.png";
import handball from "../Images/hand.png";
import download from "../Images/download.png";

const sportsData = [
  { image: cricketsvg, name: "Cricket", boys: "Boys : 1200₹", girls: "Girls : 1200₹",contact:"Vivek: 9359502953 , Gaurav : 9757398688" },
  { image: Football, name: "Football",  boys: "Boys : 1200₹", girls: "Girls : 1200₹",contact:"Vivek: 9359502953 , Gaurav : 9757398688" },
  { image: Football, name: "RingFootball", boys: "Boys : 1200₹", girls: "Girls : 1200₹",contact:"Vivek: 9359502953 , Gaurav : 9757398688" },
  { image: chess, name: "Chess",  boys: " Quad : 1200₹", girls: "Solo : 1200₹" ,contact:"Vivek: 9359502953 , Gaurav : 9757398688"},
  { image: volleyball, name: "Volleyball", boys: "Boys : 1200₹", girls: "Girls : 1200₹",contact:"Vivek: 9359502953 , Gaurav : 9757398688"},
  { image: kabaddi, name: "Kabaddi",  boys: "Boys : 1200₹", girls: "Girls : 1200₹",contact:"Vivek: 9359502953 , Gaurav : 9757398688" },
  { image: handball, name: "Handball", boys: "Boys : 1200₹", girls: "Girls : 1200₹",contact:"Vivek: 9359502953 , Gaurav : 9757398688" },
  { image: basketball2, name: "Basketball", boys: "Boys : 1200₹", girls: "Girls : 1200₹",contact:"Vivek: 9359502953 , Gaurav : 9757398688" },
];

const Event = () => {
  const [Pop, setPop] = useState(false);
  const [selectedSport, setSelectedSport] = useState(null);

  const handleViewMore = (sport) => {
    setSelectedSport(sport);
    setPop(true);
  };


  return (
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
                  {sport.boys}
                  <br />
                  {sport.girls}
                </p>
              </div>
              <div className="btns">
                <button className="btn" onClick={() => handleViewMore(sport)}>
                  View More
                </button>
                <button
                  id="downloadBtn"
                  value="download"
                  className="download"
                  onClick={() => console.log("Download logic goes here")}
                >
                  <img src={download} alt="Download" />
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="pop">{Pop && <Model sport={selectedSport} onClose={() => setPop(false)} />}</div>
      </div>
    </div>
  );
};

export default Event;
