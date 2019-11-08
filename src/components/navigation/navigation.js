import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allContentfulPage {
            edges {
              node {
                id
                title
                path
              }
            }
          }
        }
      `}
      render={({ allContentfulPage: { edges } }) => (
        <div>
          <nav>
            <ul className={styles.list}>
              {edges.map(({ node: {id, path, title} }) => (
                <li key={id} className={styles.listItem}>
                  <Link to={path} className={styles.listItemLink}>{title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    />
  )
}

export default Navigation;