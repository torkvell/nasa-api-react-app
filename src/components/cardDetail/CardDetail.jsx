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
            {this.props.roverPictures.map(picture => {
              return (
                <div>
                  <img src={picture} />
                  <p className="legend">Legend 1</p>
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
