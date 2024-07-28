import React, { useState } from "react";
import styles from "./Track.module.css";

export default function Track(props) {
  return (
    <div class="track">
      <h2 className={styles.h2}>{props.title}</h2>
      <h3>{props.artist}</h3>
    </div>
  );
}
