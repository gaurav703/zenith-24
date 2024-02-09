import React, { useState, useEffect } from "react";
import "./Event.css";
import Model from "./Model";
import pdf from "./Zenith.pdf";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer2/footer2.jsx";

const sportsData = [
  {
    image: "../Images/foot.png",
    name: "Cricket",
    boys: "Boys : 6000₹",
    // girls: "Girls : 1200₹",
    contact1: "Om Dhande: - 74990 65743 ",
    contact2: "Kuntal Lawate: 70583 75155",
  },
  {
    image: "../Images/foot.png",
    name: "Football",
    boys: "Boys : 3000₹",
    // girls: "Girls : 1200₹",
    // contact: "Sainath Shettiwar: 9604875754 , Devanshu kothe : 9130707352",
    contact1: "Sainath Shettiwar: 9604875754",
    contact2: "Devanshu kothe : 9130707352",
  },
  {
    image: "../Images/foot.png",
    name: "RingFootball",
    boys: "Boys : 2000₹",
    // girls: "Girls : 1200₹",
    // contact: "Abhishek avhad: 8329896467 , Fazlur Rahman : 8767221998",
    contact1: "Abhishek avhad: 8329896467",
    contact2: "Fazlur Rahman : 8767221998",
  },
  { image: "../Images/foot.png", name: "Chess", boys: "1200₹", girls: "1200₹" },
  {
    image: "../Images/foot.png",
    name: "Volleyball",
    boys: "Boys : 2200₹",
    girls: "Girls : 1800₹",
    //contact: "Ayush Gahukar: 7666693350 , Pranay Rathod: 8767410458",
    contact1: "Ayush Gahukar: 7666693350",
    contact2: "Pranay Rathod: 8767410458",
  },
  {
    image: "../Images/foot.png",
    name: "Kabaddi",
    boys: "Boys : 1700₹",
    girls: "Girls : 1500₹",
    //  contact: "Sushant Pradhan: 8836025310 , Nikul Jadhao : 8836025310",
    contact1: "Sushant Pradhan: 8836025310",
    contact2: "Nikul Jadhao : 8836025310",
  },
  {
    image: "../Images/foot.png",
    name: "Handball",
    boys: "Boys : 1500₹",
    girls: "Girls : 1200₹",
    //contact: "Aniket Dharwar: 96733 52236 , Udedhan Sonawane : 8888964392",
    contact1: "Aniket Dharwar: 96733 52236",
    contact2: "Udedhan Sonawane : 8888964392",
  },
  {
    image: "../Images/foot.png",
    name: "Basketball",
    boys: "Boys : 2500₹",
    girls: "Girls : 2000₹",
    // contact: "Dishant Sawwalakhe: 9699120082 , Shakib : 9960844980",
    contact1: "Dishant Sawwalakhe: 9699120082",
    contact2: "Shakib : 9960844980",
  },
];

const Event = () => {
  const [Pop, setPop] = useState(false);
  const [selectedSport, setSelectedSport] = useState(null);

  const handleViewMore = (sport) => {
    setSelectedSport(sport);
    setPop(true);
  };

  function download(pdfpath) {
    const pdfUrl = pdfpath;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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
                    <img src="../Images/foot.png"></img>
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
