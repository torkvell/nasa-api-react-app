import React, { Component } from "react";

export default class LikeCounter extends Component {
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
      <div id="likeDiv">
        <img
          className="likeButtonCard"
          src={this.state.src}
          onClick={this.increment}
          alt="like button"
        ></img>
        <b className="likeCounterCard">{this.state.numLikes}</b>
      </div>
    );
  }
}
