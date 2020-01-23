import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddComment extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired
  };

  state = { comment: "" };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state.comment);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          className="commentInput"
          type="text"
          name="comment"
          placeholder="Type your comment.."
          value={this.state.comment}
        />
        <input type="submit" value="Comment" className="commentButton" />
      </form>
    );
  }
}
