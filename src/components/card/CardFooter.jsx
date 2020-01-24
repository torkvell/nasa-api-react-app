import React from "react";
import LikeCounter from "./LikeCounter";
import LikeComment from "./LikeComment";
import AddComment from "./AddComment";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class cardFooter extends React.Component {
  state = {
    showComment: false,
    comments: []
  };

  toggleCommentSection = () => {
    this.setState({
      showComment: !this.state.showComment
    });
  };

  addComment = comment => {
    if (comment) {
      const newComment = {
        id: Math.round(Math.random() * 100000),
        comment,
        like: 0,
        src: "/img/2.png"
      };
      //we don't want any side effects so we concat instead of push which mutates
      this.setState({
        comments: this.state.comments.concat(newComment)
      });
    }
  };

  addLikeToComment = id => {
    const updatedComments = this.state.comments.map(c =>
      c.id === id ? { ...c, like: c.like + 1, src: "./img/1.png" } : c
    );

    this.setState({
      comments: updatedComments
      // src: "./img/1.png"
    });
  };

  renderComment = comment => {
    return (
      <LikeComment
        id={comment.id}
        comment={comment.comment}
        like={comment.like}
        src={comment.src}
        key={comment.id}
        addLike={this.addLikeToComment}
      />
    );
  };
  // renderComment = comment => {
  //   return <Comment text={comment.comment} key={comment.id} />;
  // };

  render() {
    // copying the array of players because `.sort()` **mutates!**
    // const comments_copy = [...this.state.comments];
    return (
      <div>
        <div className="card-action">
          <div class="card-action-buttons">
            <Button variant="primary">
              <Link to={`/card-detail/${this.props.roverId}`}>MORE INFO</Link>
            </Button>
            <Button
              onClick={this.toggleCommentSection}
              className="card-comment-toggle"
            >
              Add Comment
            </Button>
          </div>
          <div
            className="commentSection"
            style={{ display: this.state.showComment ? "block" : "none" }}
          >
            <AddComment addComment={this.addComment} />
            <ul>
              {[...this.state.comments]
                .sort((a, b) => b.like - a.like)
                .map(this.renderComment)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
