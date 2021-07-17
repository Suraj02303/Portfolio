import React, { Component } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import GetAppIcon from "@material-ui/icons/GetApp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";
//import { Refs } from "../helpers/contactRef";
export default class Contact extends Component {
  render() {
    function gitlink(e) {
      e.preventDefault();
      window.location.href = "https://github.com/Suraj02303";
      console.log("Success git link worked!");
    }
    function fblink(e) {
      e.preventDefault();
      window.location.href = "https://touch.facebook.com/sg0203";
      console.log("Success git link worked!");
    }
    function linkdinlink(e) {
      e.preventDefault();
      window.location.href =
        "https://www.linkedin.com/in/suraj-gupta-14b5381b3";
      console.log("Success git link worked!");
    }
    function resumelink(e) {
      e.preventDefault();
      window.location.href =
        "https://drive.google.com/file/d/1KbhhZJ4ZcOO8lwvSSHKbuj6wYYOn9T9l/view?usp=sharing";
      console.log("Success git link worked!");
    }
    return (
      <div>
        <div className="Contactstyle d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <div className="body-c" value="git" onClick={gitlink}>
                <GitHubIcon className="github-icon" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="body-c" onClick={linkdinlink}>
                <LinkedInIcon className="fb-icon" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="body-c" onClick={fblink}>
                <FacebookIcon className="fb-icon" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="body-c">
                  <p className="email-link">suraj.gupta2018@vitbhopal.ac.in</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="body-c" onClick={resumelink}>
                  <GetAppIcon className="resume-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
