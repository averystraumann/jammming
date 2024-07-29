import React from "react";

export default function Track(props) {
  return (
    <div>
      <h2 style={{ color: "#a3c9a8" }}>{props.title}</h2>
      <h3 style={{ fontSize: "1rem" }}>{props.artist}</h3>
    </div>
  );
}
