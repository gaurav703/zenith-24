import React from "react";
import "./loader.css";
import { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    function changeImage() {
      setTimeout(function () {
        document.getElementById("ballImage").src = "football.png";
        setTimeout(function () {
          document.getElementById("ballImage").src = "tennis ball.png";
          setTimeout(function () {
            document.getElementById("ballImage").src = "basketball.png";
            changeImage();
          }, 1000);
        }, 1000);
      }, 1000);
    }
    changeImage();
  }, []);

  return (
    <div id="spinner">
      <div class="loader">
        <img id="ballImage" src="/basketball.png" alt="basketball_logo" />
      </div>
    </div>
  );
}
