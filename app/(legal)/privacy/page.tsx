// pages/legal/privacy.js
import styles from "../styles.module.scss";

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: May 23, 2022</p>
        <p className={styles.intro}>
          This Privacy Policy will help you better understand how we collect,
          use, and share your personal information.
        </p>
      </header>

      <div className={styles.contentWrapper}>
        <aside className={styles.tocWrapper}>
          <div className={styles.tableOfContents}>
            <h3 className={styles.subheading}>Table of Contents</h3>
            <ul className={styles.toc}>
              <li>
                <a href="#personal-info">
                  1. What Personal Information We Collect
                </a>
              </li>
              <li>
                <a href="#use-of-info">
                  2. What We Do with Your Personal Information
                </a>
              </li>
              <li>
                <a href="#security">3. Security</a>
              </li>
              <li>
                <a href="#cookies">
                  4. How We Use Cookies and Collect Information Using Technology
                </a>
              </li>
              <li>
                <a href="#transfer">
                  5. We May Transfer Your Personal Information to Other
                  Countries
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className={styles.content}>
          <section id="personal-info" className={styles.section}>
            <h2 className={styles.sectionTitle}>
              1. What Personal Information We Collect
            </h2>
            <p className={styles.text}>
              We collect personal information such as your name, email address,
              and IP address when you interact with our website and services.
            </p>
            <p className={styles.text}>
              We also collect details such as your usage of the site, including
              browsing behavior, pages visited, and time spent on the site.
            </p>
          </section>

          <section id="use-of-info" className={styles.section}>
            <h2 className={styles.sectionTitle}>
              2. What We Do with Your Personal Information
            </h2>
            <p className={styles.text}>
              We use your data to provide, personalize, and improve our
              services. We may also use it for marketing purposes with your
              consent.
            </p>
            <p className={styles.text}>
              Your information helps us analyze trends, understand user
              preferences, and enhance the functionality of our services.
            </p>
          </section>

          <section id="security" className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Security</h2>
            <p className={styles.text}>
              We employ industry-standard security measures to protect your
              personal data. This includes encryption and secure servers to
              prevent unauthorized access.
            </p>
          </section>

          <section id="cookies" className={styles.section}>
            <h2 className={styles.sectionTitle}>
              4. How We Use Cookies and Collect Information Using Technology
            </h2>
            <p className={styles.text}>
              We use cookies to enhance your experience, analyze traffic, and
              personalize content. You can disable cookies through your browser
              settings, but some features may not work as intended.
            </p>
          </section>

          <section id="transfer" className={styles.section}>
            <h2 className={styles.sectionTitle}>
              5. We May Transfer Your Personal Information to Other Countries
            </h2>
            <p className={styles.text}>
              We may store your personal data in countries outside of your own.
              We ensure that your data is protected in accordance with this
              Privacy Policy.
            </p>
          </section>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Last updated: May 23, 2022</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
