import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

window.addEventListener("DOMContentLoaded", event => {
  const commentButton = document.getElementsByClassName(
    "card-comment-toggle"
  )[0];
  commentButton.addEventListener("click", toggleComment);

  function toggleComment() {
    let commentSection = document.getElementsByClassName("commentSection")[0];
    if (commentSection.style.display === "none") {
      commentSection.style.display = "block";
    } else {
      commentSection.style.display = "none";
    }
  }

  const likeButton = document.getElementsByClassName("likeDiv");
});
