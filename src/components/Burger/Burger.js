import React, { Component } from "react";
import "./burger.css";
import Cake from "./Cake";
import Menu from "./Menu";
export default class Burger extends Component {
  render() {
    return (
      <div
        style={{
          maxWidth: "1000px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        <h1>Burger use redux</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Cake />
          <Menu />
        </div>
      </div>
    );
  }
}
