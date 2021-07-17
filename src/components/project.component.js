import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cradimg } from "../helpers/cardUi.js";
import Card from "../helpers/Card.js";
import "./project.css";
import { Modalimg } from "../helpers/project.modalData.js";
import FullScreenDialog from "../Modal/project.modal";
export default function Project() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-4">
          <Card
            imgsrc={Cradimg[0].img}
            title="First Image"
            classExpand={
              <FullScreenDialog
                proName={Modalimg[0].title}
                Src={Modalimg[0].img}
                descrp={Modalimg[0].description}
                hlght={
                  <ul>
                    <li>{Modalimg[0].highlights[0]}</li>
                    <li>{Modalimg[0].highlights[1]}</li>
                    <li>{Modalimg[0].highlights[2]}</li>
                  </ul>
                }
              />
            }
          />
        </div>
        <div className="col-md-4">
          <Card
            imgsrc={Cradimg[1].img}
            title="Second Image"
            classExpand={
              <FullScreenDialog
                proName={Modalimg[1].title}
                Src={Modalimg[1].img}
                descrp={Modalimg[1].description}
                hlght={
                  <ul>
                    <li>{Modalimg[1].highlights[0]}</li>
                    <li>{Modalimg[1].highlights[1]}</li>
                    <li>{Modalimg[1].highlights[2]}</li>
                  </ul>
                }
              />
            }
          />
        </div>
        <div className="col-md-4">
          <Card
            imgsrc={Cradimg[2].img}
            title="Third Image"
            classExpand={
              <FullScreenDialog
                proName={Modalimg[2].title}
                Src={Modalimg[2].img}
                descrp={Modalimg[2].description}
                hlght={
                  <ul>
                    <li>{Modalimg[2].highlights[0]}</li>
                    <li>{Modalimg[2].highlights[1]}</li>
                    <li>{Modalimg[2].highlights[2]}</li>
                  </ul>
                }
              />
            }
          />
        </div>
        <div className="col-md-4">
          <Card
            imgsrc={Cradimg[0].img}
            title="First Image"
            classExpand={
              <FullScreenDialog
                proName={Modalimg[0].title}
                Src={Modalimg[0].img}
                descrp={Modalimg[0].description}
                hlght={
                  <ul>
                    <li>{Modalimg[0].highlights[0]}</li>
                    <li>{Modalimg[0].highlights[1]}</li>
                    <li>{Modalimg[0].highlights[2]}</li>
                  </ul>
                }
              />
            }
          />
        </div>
        <div className="col-md-4">
          <Card
            imgsrc={Cradimg[1].img}
            title="Second Image"
            classExpand={
              <FullScreenDialog
                proName={Modalimg[1].title}
                Src={Modalimg[1].img}
                descrp={Modalimg[1].description}
                hlght={
                  <ul>
                    <li>{Modalimg[1].highlights[0]}</li>
                    <li>{Modalimg[1].highlights[1]}</li>
                    <li>{Modalimg[1].highlights[2]}</li>
                  </ul>
                }
              />
            }
          />
        </div>
        <div className="col-md-4">
          <Card
            imgsrc={Cradimg[2].img}
            title="Third Image"
            classExpand={
              <FullScreenDialog
                proName={Modalimg[2].title}
                Src={Modalimg[2].img}
                descrp={Modalimg[2].description}
                hlght={
                  <ul>
                    <li>{Modalimg[2].highlights[0]}</li>
                    <li>{Modalimg[2].highlights[1]}</li>
                    <li>{Modalimg[2].highlights[2]}</li>
                  </ul>
                }
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
