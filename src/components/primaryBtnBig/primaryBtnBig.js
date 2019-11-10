import React from "react";
import styles from "./primaryBtnBig.module.css";

const PrimaryBtnBig = ({ children }) => {
  return (
    <>
      <button className={styles.primaryBtnBig}>{children}</button>
    </>
  )
}

export default primaryBtnBig;