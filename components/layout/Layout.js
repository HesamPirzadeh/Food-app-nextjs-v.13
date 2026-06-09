import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div>
      <>
        <header className={styles.header}>
          <div className={styles.left}>
            <Link href="/">HesamFood</Link>
          </div>
          <div className={styles.right}>
            <Link href="/menu">Menu</Link>
            <Link href="/categories">Categories</Link>
          </div>
        </header>
        <div className={styles.container}>{children}</div>
        <footer className={styles.footer}>
          <a target="_blank" rel="noreferrer">
            HesamFood
          </a>
          Next.js course | BotoFood Project &copy;
        </footer>
      </>
    </div>
  );
}

export default Layout;
