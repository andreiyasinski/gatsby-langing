import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styles from "./price.module.css";
import PrimaryBtnBig from "../primaryBtnBig/primaryBtnBig";

const Price = () => {
  return (
      <StaticQuery
        query={graphql`
          {
            contentfulPrice {
              title
              text {
                text
              }
              price
            }
          }
        `}
        render={({
          contentfulPrice: {
            title, 
            text: { text },
            price
          }
        }) => (
          <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
            <div>
              <p className={styles.price}>{price}</p>
              <p className={styles.priceText}>UI Design Kit</p>
            </div>
            <p className={styles.smallText}>See, One price. Simple.</p>
            <PrimaryBtnBig>Purchase Design Kit</PrimaryBtnBig>
          </div>
        )}
      />
  )
}

export default Price;