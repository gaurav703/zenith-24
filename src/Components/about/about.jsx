import React from "react";
import "./about.css";

export default function About() {
  // const [click, setClick] = useState(0);

  // const readButton = () => {
  //   if (click === 0) {
  //     document.getElementById("dot").style.display = "none";
  //     document.getElementById("more").style.display = "block";
  //     document.getElementById("read-but").innerHTML = "Read Less...";
  //     setClick(1);
  //   } else {
  //     document.getElementById("dot").style.display = "block";
  //     document.getElementById("more").style.display = "none";
  //     document.getElementById("read-but").innerHTML = "Read More...";
  //     setClick(0);
  //   }
  // };

  return (
    <div className="about-main-div">
      <div className="about-inner-div">
        <div className="about-info-div">
          <h1>ZENITH'24</h1>
          <p>
            We bring you Zenith'23, the 8th edition of our college sports
            extravaganza with the conviction to go beyond Zenith'22. The Ignited
            spirits shall be unleashed and we shall "DEVOUR THE VICTORY". Last year we hosted this event
              in the heated month of April. Best student athletes from across
              the state will converge to perspire and showcase their talents
              with competing for the title of being the best. With a wide
              variety of sports to choose from, basketball, football,
              volleyball, kabaddi etc, there is something for everyone to enjoy.
              From the thrill of the basketball court to the intensity of the
              track and field, this is a competition you won't want to miss.
              Join us as we come together to celebrate the passion, dedication,
              and hard work of these exceptional young athletes.
          </p>
        </div>
      </div>
    </div>
  );
}
