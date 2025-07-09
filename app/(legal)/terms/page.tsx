// pages/legal/terms.js
import styles from "../styles.module.scss";

const TermsAgreement = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.intro}>
          Please read these Terms of Service carefully before using our
          services. By using our services, you agree to be bound by these terms.
        </p>
      </header>

      <div className={styles.contentWrapper}>
        <aside className={styles.tocWrapper}>
          <div className={styles.tableOfContents}>
            <h3 className={styles.subheading}>Table of Contents</h3>
            <ul className={styles.toc}>
              <li>
                <a href="#user-responsibilities">1. User Responsibilities</a>
              </li>
              <li>
                <a href="#account-termination">2. Account Termination</a>
              </li>
              <li>
                <a href="#liability">3. Limitation of Liability</a>
              </li>
            </ul>
          </div>
        </aside>

        <div className={styles.content}>
          <section id="user-responsibilities" className={styles.section}>
            <h2 className={styles.sectionTitle}>1. User Responsibilities</h2>
            <p className={styles.text}>
              As a user, you are responsible for ensuring that your use of our
              services complies with applicable laws and regulations. e use your
              data to provide, personalize, and improve our services. We may
              also use it for marketing purposes with your consent.
            </p>
          </section>

          <section id="account-termination" className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Account Termination</h2>
            <p className={styles.text}>
              We reserve the right to suspend or terminate accounts if users
              violate these Terms of Service or engage in inappropriate
              behavior. e use your data to provide, personalize, and improve our
              services. We may also use it for marketing purposes with your
              consent.
            </p>
          </section>

          <section id="liability" className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Limitation of Liability</h2>
            <p className={styles.text}>
              We are not responsible for any indirect, incidental, or
              consequential damages arising from the use of our services. e use
              your data to provide, personalize, and improve our services. We
              may also use it for marketing purposes with your consent.
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

export default TermsAgreement;
