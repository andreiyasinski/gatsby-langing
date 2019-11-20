import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styles from "./description.module.css";

const Description = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          contentfulDescription {
            title
            description {
              description
            }
            image {
              file {
                url
              }
            }
          }
        }
      `}
      render={({
        contentfulDescription: {
          title, 
          description: { description },
          image: {
            file: {
              url
            }
          }
        }
      }) => (
        <div className={styles.container}>
          <div className={styles.text}>
            <div>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.options}>
              <div style={{marginRight: 30}}>
                {/* <img src={url} alt="icon" className={styles.icon} /> */}
                <h2 className={styles.optionTitle}>Title Goes Here</h2>
                <p className={styles.optionDescription}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
              </div>
              <div>
                {/* <img src={url} alt="icon" className={styles.icon} /> */}
                <h2 className={styles.optionTitle}>Title Goes Here</h2>
                <p className={styles.optionDescription}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
              </div>
            </div>
          </div>
          <div className={styles.descImgWrapper}>
            <img src={url} alt="desc-img" className={styles.descImg} />
          </div>
        </div>
      )}
    />
  )
}

export default Description;