// pages/legal/privacy.js
import styles from "../styles.module.scss";

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Pressella Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: March 27, 2025</p>
        <p className={styles.intro}>
          Click to see{' '}
          <a href="https://www.notion.so/Pressella-GDPR-Privacy-Policy-20a6a64145338042be29f792e0c479fc?pvs=21" target="_blank" rel="noopener noreferrer">
            GDPR Privacy Policy
          </a>
        </p>
      </header>

      <div className={styles.contentWrapper}>
        <aside className={styles.tocWrapper}>
          <div className={styles.tableOfContents}>
            <h3 className={styles.subheading}>Table of Contents</h3>
            <ul className={styles.toc}>
              <li><a href="#introduction">1. Introduction</a></li>
              <li><a href="#information-we-collect">2. Information We Collect</a></li>
              <li><a href="#how-we-use">3. How We Use Your Information</a></li>
              <li><a href="#sharing">4. Sharing Your Information</a></li>
              <li><a href="#retention">5. Data Retention</a></li>
              <li><a href="#rights">6. Your Data Protection Rights</a></li>
              <li><a href="#changes">7. Changes to This Privacy Policy</a></li>
              <li><a href="#contact">8. Contact Us</a></li>
            </ul>
          </div>
        </aside>

        <div className={styles.content}>
          <section id="introduction" className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Introduction</h2>
            <p className={styles.text}>
              Pressella is a product of Pathos Communications Ltd (“Pathos”, “we”, “our”, or “us”), a UK-based public relations company. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you access and use our website, applications, and related services (collectively, the “Service”). By using our Service, you consent to the practices described in this Privacy Policy and our Terms of Service. If you do not agree with this Privacy Policy, please do not use our Service.
            </p>
          </section>

          <section id="information-we-collect" className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
            <p className={styles.text}><strong>A. Information You Provide Directly</strong></p>
            <ul className={styles.text}>
              <li><strong>Profile & Registration Data:</strong> Your name, email address, and other details provided when you sign up or connect your Zoom and calendar accounts (Google Calendar, Outlook Calendar).</li>
              <li><strong>Communications:</strong> When you contact us for support or provide feedback, we collect the details you supply (e.g. your name, email, and message content).</li>
            </ul>
            <p className={styles.text}><strong>B. Information Collected Through Use of the Service</strong></p>
            <ul className={styles.text}>
              <li><strong>Meeting Data:</strong> To enable our meeting agent bot, we access data regarding scheduled meetings (dates, times, titles, join URLs) and temporarily process recordings and transcripts to generate marketing articles. This data is encrypted in transit and securely deleted immediately after processing.</li>
              <li><strong>Device and Usage Data:</strong> Information about your device (IP address, browser, operating system) and usage patterns to help us enhance the Service.</li>
              <li><strong>Cookies & Similar Technologies:</strong> We use cookies to provide a better experience and collect usage statistics. Please review our Cookie Policy for details.</li>
            </ul>
            <p className={styles.text}><strong>C. Information from Third Parties</strong></p>
            <ul className={styles.text}>
              <li><strong>Third-Party Integrations:</strong> When you link your Zoom or calendar accounts, we receive the relevant meeting and profile data solely to deliver our core functionality.</li>
            </ul>
            <p className={styles.text}><em>Assumption: Pressella does not collect sensitive personal data beyond the information provided through these channels.</em></p>
          </section>

          <section id="how-we-use" className={styles.section}>
            <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
            <ul className={styles.text}>
              <li><strong>Service Delivery:</strong> To automatically join meetings, record sessions, and generate newsworthy articles from meeting content for outbound marketing.</li>
              <li><strong>Account & Calendar Management:</strong> To authenticate your account and manage calendar synchronizations.</li>
              <li><strong>Service Improvement:</strong> To analyse usage trends and develop new features.</li>
              <li><strong>Customer Support:</strong> To provide technical assistance and communicate important updates.</li>
              <li><strong>Compliance and Security:</strong> To monitor for fraud, enforce our policies, and comply with legal obligations.</li>
              <li><strong>Marketing Communications:</strong> With your consent, to send you promotional materials and service updates. You may opt out at any time.</li>
            </ul>
          </section>

          <section id="sharing" className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Sharing Your Information</h2>
            <p className={styles.text}>
              We do not sell or share your personal information with third parties for their marketing purposes without your explicit consent. We may share your information with:
            </p>
            <ul className={styles.text}>
              <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in providing our Service under strict confidentiality agreements.</li>
              <li><strong>Legal and Regulatory Authorities:</strong> When required by law or legal process.</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales. Any such transfer will continue to be governed by this Privacy Policy.</li>
            </ul>
          </section>

          <section id="retention" className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Data Retention</h2>
            <p className={styles.text}>
              We retain your personal information only as long as necessary to fulfil the purposes described in this Privacy Policy or as required by law. Temporary meeting data (e.g. recordings and transcripts) is securely deleted immediately after use.
            </p>
          </section>

          <section id="rights" className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Your Data Protection Rights</h2>
            <p className={styles.text}>
              If you are located in the United Kingdom or the European Economic Area, you have rights under the UK GDPR and other applicable data protection laws, including the right to:
            </p>
            <ul className={styles.text}>
              <li><strong>Access</strong> your personal data,</li>
              <li><strong>Rectify</strong> any inaccuracies,</li>
              <li><strong>Erase</strong> your personal data,</li>
              <li><strong>Restrict or Object</strong> to processing,</li>
              <li><strong>Data Portability.</strong></li>
            </ul>
            <p className={styles.text}>
              To exercise these rights, please contact us at <a href="mailto:info@pathoscommunications.co.uk">info@pathoscommunications.co.uk</a>. We may ask you to verify your identity before processing your request.
            </p>
          </section>

          <section id="changes" className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Changes to This Privacy Policy</h2>
            <p className={styles.text}>
              We reserve the right to update or change this Privacy Policy at any time. Any changes will be posted on this page with an updated “Last Updated” date. Your continued use of the Service after any changes indicates your acceptance of the revised Privacy Policy.
            </p>
          </section>

          <section id="contact" className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Contact Us</h2>
            <p className={styles.text}>
              If you have any questions or concerns regarding this Privacy Policy, please contact us at:
            </p>
            <p className={styles.text}>
              <strong>Email: <a href="mailto:info@pathoscommunications.co.uk">info@pathoscommunications.co.uk</a></strong>
            </p>
          </section>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Last updated: March 27, 2025</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
