import React, { Component } from "react";
import "../App.css";

export default class LikeCounter extends React.Component {
  state = {
    numLikes: 0,
    src: "/img/2.png"
  };
  increment = () => {
    this.setState({
      numLikes: this.state.numLikes + 1,
      src: "/img/1.png"
    });
  };
  render() {
    return (
      <div>
        <img
          className="likeButton"
          src={this.state.src}
          onClick={this.increment}
        ></img>
        <b className="likeCounter">{this.state.numLikes}</b>
      </div>
    );
  }
}