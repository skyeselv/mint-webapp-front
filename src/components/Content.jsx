import React, { Component } from "react";
import "../assets/styles/main.scss";

export default class Content extends Component {
  render() {
    const { content } = this.props;
    return content.map((item, index) => (
      <div className="main-content">
        <div className="main-content-img">
          <img src={`${item.image}`} />
        </div>
        <div className="main-content-description">{item.description}</div>
        <div className="main-content-signature">
          by <span className="main-content-signature-autor">{item.autor}</span>{" "}
          / <span>{item.date}</span>
        </div>
      </div>
    ));
  }
}
