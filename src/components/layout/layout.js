import React from "react";
import Header from "../header/header";
import styles from "./layout.module.css";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            <Header />
            {children}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.wrapper}>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout;