import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const SkillBody = (props) => {
  return (
    <div className="skill text-center">
      <div className="skill-body-icon">
        {props.SkillIcon}
      </div>
      <div className="skill-body text-dark">
        <h4 className="skill-title">{props.title}</h4>
        <p className="skill-text text-secondary">
          {props.des}
        </p>
      </div>
    </div>
  );
};
export default SkillBody;
