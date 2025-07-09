// pages/index.js
import Link from "next/link";
import styles from "./styles.module.scss";

const Home = () => (
  <div className={styles.home}>
    <h1>Welcome to the Legal Pages</h1>
    <nav>
      <ul>
        <li>
          <Link href="/legal/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/legal/terms">Terms of Service</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Home;
