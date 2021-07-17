import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img
          className="card-img-top"
          src={props.imgsrc}
          alt = "img"/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          "The Paragraphs module allows content creators to choose which kinds."
        </p>
        {props.classExpand}
      </div>
    </div>
  );
};
export default Card;
