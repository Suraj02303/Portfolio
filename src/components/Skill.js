import React, { Component } from "react";
import SkillBody from "../helpers/Skill-body";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Skills.css";
export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid d-flex justify-content-center skill">
          <div className="row">
            <div className="col-md-4">
    <SkillBody SkillIcon={<FiberManualRecordIcon className="skill-icons"/>} des="Good problem solving and creative thinking"/>
            </div>
            <div className="col-md-4">
              <SkillBody SkillIcon={<FiberManualRecordIcon className="skill-icons" />} des="I have decent knowledge about web development both back-end and front-end."/>
            </div>
            <div className="col-md-4">
    <SkillBody SkillIcon={<FiberManualRecordIcon className="skill-icons" />}des="A good understanding of data structure and Algo"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
