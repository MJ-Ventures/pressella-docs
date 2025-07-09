// pages/index.js
import Link from "next/link";
import styles from "./styles.module.scss";

const Home = () => (
  <div className={styles.home}>
    <h1>Welcome to the Legal Pages</h1>
    <nav>
      <ul className={styles.buttonList}>
        <li>
          <Link href="/privacy" className={styles.button}>
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/terms" className={styles.button}>
            Terms of Service
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Home;
