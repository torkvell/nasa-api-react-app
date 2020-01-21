import React from "react";
import LikeCounter from "./LikeCounter";

export default class cardFooter extends React.Component {
  state = {
    showComment: false
  };
  toggleCommentSection = () => {
    this.setState({
      showComment: !this.state.showComment
    });
  };
  render() {
    const { imageUrl, title, description } = this.props;
    return (
      <div>
        <div class="card-action">
          <a href={this.props.cardLink}>MORE INFO</a>
          <div onClick={this.toggleCommentSection} class="card-comment-toggle">
            Comments
          </div>
          <LikeCounter />
        </div>
        <div
          class="commentSection"
          style={{ display: this.state.showComment ? "block" : "none" }}
        >
          <input
            class="commentInput"
            type="text"
            placeholder="Type your comment.."
          ></input>
          <button id="commentButton">Publish</button>
          <div class="commentResult">Comments</div>
        </div>
      </div>
    );
  }
}
