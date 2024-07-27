import React, { useState } from "react";

export default function Track(props) {
  return (
    <div className="track">
      <h2>{props.title}</h2>
      <h3>{props.artist}</h3>
    </div>
  );
}
