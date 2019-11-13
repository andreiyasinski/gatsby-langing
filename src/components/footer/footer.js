import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Navigation from "../navigation/navigation";
import styles from "./footer.module.css";
import PrimaryBtnSmall from "../primaryBtnSmall/primaryBtnSmall";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoBlock}>
        <p className={styles.copyright}>&copy;2019 UIX</p>
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
        <PrimaryBtnSmall>Buy Now</PrimaryBtnSmall>
      </div>
      <div className={styles.nav}>
        <Navigation />
      </div>
    </div>
  )
}

export default Footer;