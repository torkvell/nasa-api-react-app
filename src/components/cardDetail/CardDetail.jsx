import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class CardDetails extends Component {
  render() {
    return (
      <div>
        <h3>Rover name: {this.props.roverName}</h3>
        <div class="carousel" id="hoverPictureWrapper">
          <Carousel>
            {this.props.roverData.map(obj => {
              console.log(obj);
              const imgSrc = obj.img_src;
              const cameraName = obj.camera.full_name;
              const roverLandingDate = obj.rover.landing_date;
              return (
                <div>
                  <img src={imgSrc} />
                  <p className="legend">
                    {cameraName}: {roverLandingDate}
                  </p>
                </div>
              );
            })}
          </Carousel>
        </div>
        <Link to="/">Go back to the index page</Link>
      </div>
    );
  }
}
