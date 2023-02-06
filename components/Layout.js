import Link from "next/link";
import { useRef } from "react";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {

  const navRef = useRef();
  const wrapperRef = useRef();

  let isNavVisible = false;

  function toggleNav() {
    if (isNavVisible === true) {
      navRef.current.style.animation = `${styles.slideOut} 0.2s forwards`;
      
      wrapperRef.current.style.animation = `${styles.fadeOut} 0.4s forwards`;
      wrapperRef.current.style.display = "none";
    } else if (isNavVisible === false) {
      navRef.current.style.animation = `${styles.slide} 0.2s forwards`;
      
      wrapperRef.current.style.animation = `${styles.fadeIn} 0.4s forwards`;
      wrapperRef.current.style.display = "block";
    }

    isNavVisible = !isNavVisible;
  }

  return(
    <div className={styles.layout}>
      <div id={styles.wrapper} ref={wrapperRef}></div>

      <nav ref={navRef}>
        <div id={styles.navHeader}><h2>Menu</h2></div>

        <div id={styles.navContent}>
          <ul>
            <li>
              <Link href="/recipes" onClick={toggleNav}>Recipes</Link>
            </li>
            <li>
              <Link href="/blog" onClick={toggleNav}>Blog</Link>
            </li>
          </ul>
        </div>

        <div id={styles.navSidebar}></div>
        <button onClick={toggleNav} id={styles.navToggle}>=</button>
      </nav>

      <header>

      </header>

      <main>
        { children }

      </main>

      <footer>
        Copyright 2023. All Rights reserved.
      </footer>
    </div>
  )
}