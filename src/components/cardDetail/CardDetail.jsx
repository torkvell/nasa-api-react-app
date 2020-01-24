import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
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
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={imgSrc}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h1>
                      {cameraName}: {roverLandingDate}
                    </h1>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <Link to="/">Go back to the index page</Link>
      </div>
    );
  }
}

// <Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=First slide&bg=373940"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
