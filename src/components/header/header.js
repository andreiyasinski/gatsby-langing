import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Navigation from "../navigation/navigation";
import styles from "./header.module.css";
import PrimaryBtnSmall from "../primaryBtnSmall/primaryBtnSmall";

const Header = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <StaticQuery
        query={graphql`
          {
            contentfulLogo {
              logo {
                file {
                  url
                }
              }
            }
        }
        `}
        render={({ contentfulLogo:{ logo: { file: { url } }} }) => (
          <div>
            <Link to="/">
              <img src={url} alt="logo" className={styles.logo} />
            </Link>
          </div>
        )}
      />
      <PrimaryBtnSmall>Purchase UI Kit</PrimaryBtnSmall>
    </div>
  )
}

export default Header;