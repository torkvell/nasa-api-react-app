import React from "react";
import LikeCounter from "./LikeCounter";
import AddComment from "./AddComment";
import Comment from "./Comment";

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
    let newComment = {
      id: Math.round(Math.random() * 100000),
      comment
    };
    this.setState({
      comments: this.state.comments.concat(newComment)
    });
  };

  renderComment = comment => {
    console.log(comment);
    return <Comment text={comment.comment} key={comment.id} />;
  };

  render() {
    // copying the array of players because `.sort()` **mutates!**
    const comments_copy = [...this.state.comments];
    console.log(comments_copy); // <!-- add console.log's if you're not sure!
    return (
      <div>
        <div class="card-action">
          <a href={this.props.cardLink}>MORE INFO</a>
          <div onClick={this.toggleCommentSection} class="card-comment-toggle">
            Comments
          </div>
          <LikeCounter />
          <div
            class="commentSection"
            style={{ display: this.state.showComment ? "block" : "none" }}
          >
            <AddComment addComment={this.addComment} />
          </div>
          <div>{comments_copy.map(this.renderComment)}</div>
        </div>
      </div>
    );
  }
}
