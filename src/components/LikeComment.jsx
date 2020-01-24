import React, { Component } from "react";
import PropTypes from "prop-types";

export default class LikeComment extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    like: PropTypes.number.isRequired,
    addLike: PropTypes.func.isRequired
  };

  onClick = () => {
    this.props.addLike(this.props.id);
  };

  render() {
    return (
      <li className="comment">
        <p>{this.props.comment}</p>
        <div className="likeDiv">
          <img
            className="likeButton"
            src={this.props.src}
            alt="like it"
            onClick={this.onClick}
          ></img>
          <b className="likeCounter">{this.props.like}</b>
        </div>
      </li>
    );
  }
}
