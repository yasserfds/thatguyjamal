import * as React from "react";
import { Link } from "react-router-dom";
import "./css/_.css";

export default function notFound() {
  return (
    <div className="notFound">
      <h1>Page not found!</h1>
      <h3>
        <Link to="/">Return Home</Link>
      </h3>
    </div>
  );
}
