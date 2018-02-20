// Core
import React, { Component } from "react";
import classes from "./Home.scss";
import d from "./d.png";

export default class Home extends Component {
  render() {
    return (
      <h1 className={classes.root}>
        Hello <img src={d} />
      </h1>
    );
  }
}
