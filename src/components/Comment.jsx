import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Comment extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="comment">
        <p className="commentText">{this.props.text}</p>
      </div>
    );
  }
}
