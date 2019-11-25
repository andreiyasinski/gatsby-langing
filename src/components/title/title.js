import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styles from "./title.module.css";

const Title = () => {
  return (
    <div className={styles.container}>
      <StaticQuery
        query={graphql`
          {
            contentfulTitle {
              title
              description {
                description
              }
            }
          }
        `}
        render={({ contentfulTitle: { title, description: { description } } }) => (
          <div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </div>
        )}
      />
      <div className={styles.btnBlock}>
        <button 
          className={styles.btn}
        >
          Purchase UI Kit
        </button>
        <button
          className={styles.btnTransparent}
        >
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Title;