import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styles from "./features.module.css";
import Featureitem from "../featureItem/featureItem";

const Features = () => {
  return (
    <div className={styles.container}>
      <StaticQuery
        query={graphql`
          {
            allContentfulFeatures (sort: {order: ASC, fields: createdAt}) {
              edges {
                node {
                  id
                  title
                  description {
                    description
                  }
                  image {
                    file {
                      url
                    }
                  }
                  buttonText
                }
              }
            }
          }
        `}
        render={({
          allContentfulFeatures: {
            edges
          }
        }) => (
          edges.map(({ node }) => (
            <Featureitem key={node.id} content={node} />
          ))
        )}
      />
    </div>
  )
}

export default Features;