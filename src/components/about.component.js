import React, { useState } from "react";
import "./about.css";
import { images } from "../helpers/carouselData.js";
import ArrowBackIOSIcon from "@material-ui/icons/ArrowBackIos";
import ArrowBackForwardIOSIcon from "@material-ui/icons/ArrowForwardIos";
//import background from "../assets/AboutBackgroundImg.png";

export default function About() {
  const [currImg, setCurrImg] = useState(0);
  return (
    <div className="carousel">
      <div
        className="carouselInner overflow ms-auto"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div className="left" 
        onClick={()=>
        currImg >0 && setCurrImg(currImg-1)}>
          <ArrowBackIOSIcon />
        </div>
        <div className="center">
          <h1>{images[currImg].title}</h1>
          <p>{images[currImg].subtitle}</p>
        </div>
        <div className="right" 
        onClick={()=>
        currImg <images.length-1 && setCurrImg(currImg+1)}>
          <ArrowBackForwardIOSIcon />
        </div>
      </div>
    </div>
  );
}

//images[currimg].attribute;
//here attribute is attribute_name associated with image
