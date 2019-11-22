import React, { useState } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Navigation from "../navigation/navigation";
import styles from "./header.module.css";
import PrimaryBtnSmall from "../primaryBtnSmall/primaryBtnSmall";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.menuBlock} ${isMenuOpen ? styles.menu_btn_active : null}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={styles.menu}></span>
      </div>
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
          <div className={styles.logoWrapper}>
            <Link to="/">
              <img src={url} alt="logo" className={styles.logo} />
            </Link>
          </div>
        )}
      />
      <div className={`${styles.header} ${isMenuOpen ? styles.toggleMenu : null}`}>
        <Navigation />
        <PrimaryBtnSmall>Purchase UI Kit</PrimaryBtnSmall>
      </div>
    </div>
  )
}

export default Header;