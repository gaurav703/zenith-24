import React from "react";
import "./our_team.css";
import { Instagram } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import  vivek from "../images/profile.jpg"
const data=[
    {
        Name:"Vivek Bisen",
        image:vivek,
        possition:"Joint-coordinator",
        insta:"https://www.instagram.com/vivek_bisen_04?igsh=MW9lenE3Z2NwemJ3Mw==",
        mail:"mailto:vivekbisen04@gmail.com",
        phone:"tel:+919359502953"
    },
    {
        Name:"Prashik Bhimte",
        image:vivek,
        possition:"Joint-coordinator",
        insta:"https://www.instagram.com/vivek_bisen_04?igsh=MW9lenE3Z2NwemJ3Mw==",
        mail:"vivekbisen04@gmail.com",
        phone:"9359502953"
    }
]
const Our_team = () => {
  return (
    <div className="container">
        {data.map((profile,index)=>(
    <div class="card">
      <div class="card-info">
        <div class="card-avatar">
            <img src={profile.image}></img>
        </div>
        <div class="card-title">{profile.Name}</div>
        <div class="card-subtitle">{profile.possition}</div>
      </div>
      <ul class="card-social">
        <li class="card-social__item">
          <a href={profile.insta} target="_blank"> <Instagram /></a>
        </li>
        <li class="card-social__item">
        <a href={profile.mail}> <Mail/></a>
        </li>
        <li class="card-social__item">
          <a href={profile.phone}><Phone/></a>
        </li>
      </ul>
    </div>
    ))}
    </div>
  );
};

export default Our_team;
