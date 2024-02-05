import React from "react";
import "./loader.css";
// import { useEffect } from "react";
import basketball from "../../Images/basketball.png";
// import tennisball from "../../Images/tennis ball.png";
// import football from "../../Images/football.png";

export default function Loader() {

  // const spinner = document.getElementById("spinner");

  // useEffect(() => {
  //   function changeImage() {
  //     setTimeout(function () {
  //       document.getElementById("ballImage").src = football;
  //       setTimeout(function () {
  //         document.getElementById("ballImage").src = tennisball;
  //         setTimeout(function () {
  //           document.getElementById("ballImage").src = basketball;
  //           changeImage();
  //         }, 1000);
  //       }, 1000);
  //     }, 1000);
  //   }
  //   changeImage();
  // }, [spinner]);

  return (
    <div id="spinner">
      <div class="loader">
        <img id="ballImage" src={basketball} alt="basketball_logo" />
      </div>
    </div>
  );
}
