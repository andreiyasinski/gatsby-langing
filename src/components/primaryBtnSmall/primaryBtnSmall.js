import React from "react";
import styles from "./primaryBtnSmall.module.css";

const PrimaryBtnSmall = ({ children }) => {
  return (
    <>
      <button className={styles.primaryBtnSmall}>{children}</button>
    </>
  )
}

export default PrimaryBtnSmall;