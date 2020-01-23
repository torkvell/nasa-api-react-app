import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./cardDetail.css";

export default class CardDetails extends Component {
  render() {
    return (
      <div>
        <Link to="/">Go back to the index page</Link>
      </div>
    );
  }
}
