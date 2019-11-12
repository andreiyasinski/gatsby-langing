import React from "react"
import styles from "./featureItem.module.css";
import PrimaryBtnBig from "../primaryBtnBig/primaryBtnBig";

const Featureitem = ({
  content: {
    title,
    description: {
      description
    },
    image: {
      file: {
        url
      }
    },
    buttonText
  }
}) => (
  <div className={styles.container}>
    <div>
      <img src={url} alt="feature-img" className={styles.featureImg} />
    </div>
    <div className={styles.textBlock}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      { buttonText && <div className={styles.btn}><PrimaryBtnBig>{buttonText}</PrimaryBtnBig></div> }
    </div>
  </div>
)

export default Featureitem