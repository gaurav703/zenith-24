import React, { useRef } from "react";
import "./Model.css";
import { X } from "lucide-react";

const Model = ({ onClose }) => {
  return (
   <div className="Main">
    <div className="pop_up" id="pop_up">
      <div className="btn">
        <button className="x" onClick={onClose}>
          <X />
        </button>
      </div>
      <h2>Cricket</h2>
      <h3>Entry Fee(Boys): ₹1500</h3>
      <h3>Entry Fee(Girls): ₹1200</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        cupiditate similique error! Cumque totam corporis aliquam asperiores
        dicta enim dolorum. Quas architecto veniam voluptas explicabo totam
        voluptates non in voluptate suscipit minima voluptatibus nemo neque,
        expedita dolorum esse itaque optio.
      </p>
      <button className="Reg">Register</button>
    </div>
    </div>
    
  );
};

export default Model;
