import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Navigation from "../navigation/navigation";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <StaticQuery
        query={graphql`
          {
            contentfulAsset {
              id
              file {
                url
              }
            }
          }
        `}
        render={({ contentfulAsset: { file: { url } } }) => (
          <div>
            <Link to="/">
              <img src={url} alt="logo" width="79px" height="38px" />
            </Link>
          </div>
        )}
      />
      <button className={styles.primaryBtn}>Purchase UI Kit</button>
    </div>
  )
}

export default Header;