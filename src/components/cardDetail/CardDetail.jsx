import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function CardDetails(props) {
  // const id = this.props.match.params.id;
  const { id } = props;

  return (
    <div>
      This page will show images of the {id} satelitte
      <Link to="/">Go back to the index page</Link>
    </div>
  );
}
