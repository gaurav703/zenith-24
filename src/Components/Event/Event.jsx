import React, { useState, useEffect } from "react";
import "./Event.css";
import Model from "./Model";

const sportsData = [
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415831/Event-Page/dhz3zwc6ebpiytudgmpr.png",
    name: "Cricket",
    boys: "Boys : 1200₹",
    girls: "Girls : 1200₹",
    contact: "Vivek: 9359502953 , Gaurav : 9757398688",
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415833/Event-Page/xcul6wzqejyuxxh4bjgu.png",
    name: "Football",
    boys: "Boys : 1200₹",
    girls: "Girls : 1200₹",
    contact: "Vivek: 9359502953 , Gaurav : 9757398688",
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415833/Event-Page/xcul6wzqejyuxxh4bjgu.png",
    name: "RingFootball",
    boys: "Boys : 1200₹",
    girls: "Girls : 1200₹",
    contact: "Vivek: 9359502953 , Gaurav : 9757398688",
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415829/Event-Page/jcqmiwan90zxdjqepfax.png",
    name: "Chess",
    boys: " Quad : 1200₹",
    girls: "Solo : 1200₹",
    contact: "Vivek: 9359502953 , Gaurav : 9757398688",
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415835/Event-Page/fhvd0hjerpv8pmlbkhse.png",
    name: "Volleyball",
    boys: "Boys : 1200₹",
    girls: "Girls : 1200₹",
    contact: "Vivek: 9359502953 , Gaurav : 9757398688",
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415829/Event-Page/wapi2dnoivdrd4e3cofq.png",
    name: "Kabaddi",
    boys: "Boys : 1200₹",
    girls: "Girls : 1200₹",
    contact: "Vivek: 9359502953 , Gaurav : 9757398688",
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415834/Event-Page/dsxvtc0pgyta5mpyprkt.png",
    name: "Handball",
    boys: "Boys : 1200₹",
    girls: "Girls : 1200₹",
    contact: "Vivek: 9359502953 , Gaurav : 9757398688",
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415833/Event-Page/apa36dxqwxmevwkgl5hl.png",
    name: "Basketball",
    boys: "Boys : 1200₹",
    girls: "Girls : 1200₹",
    contact: "Vivek: 9359502953 , Gaurav : 9757398688",
  },
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
                  <img
                    src="https://res.cloudinary.com/dqki29mbg/image/upload/v1707415831/Event-Page/bsomh2xhrbiuz6jpe9ah.png"
                    alt="Download"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="pop">
          {Pop && <Model sport={selectedSport} onClose={() => setPop(false)} />}
        </div>
      </div>
    </div>
  );
};

export default Event;
