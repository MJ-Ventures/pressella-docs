// pages/legal/terms.js
import styles from "../styles.module.scss";

const TermsAgreement = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Pressella Terms of Service</h1>
        <p className={styles.lastUpdated}>Last Updated: March 27, 2025</p>
      </header>

      <div className={styles.contentWrapper}>
        <aside className={styles.tocWrapper}>
          <div className={styles.tableOfContents}>
            <h3 className={styles.subheading}>Table of Contents</h3>
            <ul className={styles.toc}>
              <li><a href="#about">1. About Pressella</a></li>
              <li><a href="#eligibility">2. Eligibility and Account Requirements</a></li>
              <li><a href="#license">3. Grant of License</a></li>
              <li><a href="#uses">4. Permitted and Prohibited Uses</a></li>
              <li><a href="#ownership">5. Your Content and Data Ownership</a></li>
              <li><a href="#payment">6. Payment and Subscription</a></li>
              <li><a href="#third-party">7. Third-Party Services and Integrations</a></li>
              <li><a href="#disclaimer">8. Disclaimers and Limitation of Liability</a></li>
              <li><a href="#indemnification">9. Indemnification</a></li>
              <li><a href="#dispute">10. Dispute Resolution</a></li>
              <li><a href="#governing-law">11. Governing Law and Jurisdiction</a></li>
              <li><a href="#termination">12. Termination</a></li>
              <li><a href="#modifications">13. Modifications to These Terms</a></li>
              <li><a href="#miscellaneous">14. Miscellaneous</a></li>
              <li><a href="#contact">15. Contact Information</a></li>
            </ul>
          </div>
        </aside>

        <div className={styles.content}>
          <section id="about" className={styles.section}>
            <h2 className={styles.sectionTitle}>1. About Pressella</h2>
            <p className={styles.text}>
              Pressella is an AI-powered meeting agent bot and a product of Pathos Communications Ltd (“Pathos”, “we”, “our”, or “us”), a UK-based public relations company. Pressella helps you sync your calendar, automatically join and record Zoom meetings (with appropriate consents), and generate newsworthy articles based on meeting content for your outbound marketing efforts. By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, please do not use the Service.
            </p>
          </section>

          <section id="eligibility" className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Eligibility and Account Requirements</h2>
            <ul className={styles.text}>
              <li><strong>Eligibility:</strong> You must be at least 18 years old to use the Service. By using Pressella, you represent that you are 18 or older, have not been previously suspended from the Service, and that your account information is accurate and up to date.</li>
              <li><strong>Account Setup:</strong> You must create an account and connect an active Zoom account and calendar (Google Calendar or Outlook Calendar) to use the Service. You are responsible for maintaining the confidentiality of your account and for all activities that occur under it.</li>
            </ul>
          </section>

          <section id="license" className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Grant of License</h2>
            <p className={styles.text}>
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use the Service for your internal business or personal purposes. You may not sublicense, distribute, or otherwise extend access to the Service beyond what is expressly permitted here.
            </p>
          </section>

          <section id="uses" className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Permitted and Prohibited Uses</h2>
            <p className={styles.text}><strong>Permitted Uses:</strong></p>
            <ul className={styles.text}>
              <li>Use Pressella to sync your calendar, join and record scheduled Zoom meetings, and generate marketing content.</li>
              <li>Access and manage generated content via your user dashboard.</li>
            </ul>
            <p className={styles.text}><strong>Prohibited Uses:</strong></p>
            <ul className={styles.text}>
              <li><strong>Unauthorized Recording:</strong> You must ensure that all meeting participants have provided the necessary consent for recording. Use of the Service without such consent is strictly prohibited.</li>
              <li><strong>Interference:</strong> You may not interfere with or circumvent any security measures or access controls.</li>
              <li><strong>Reverse Engineering:</strong> You shall not reverse engineer, decompile, or disassemble any part of the Service.</li>
              <li><strong>Misuse of Data:</strong> You shall not use the Service to collect or distribute personal data beyond the scope of its intended functionality.</li>
              <li><strong>Unauthorized Distribution:</strong> You may not reproduce or distribute any content generated by the Service for commercial purposes outside your internal use without our express written consent.</li>
            </ul>
          </section>

          <section id="ownership" className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Your Content and Data Ownership</h2>
            <ul className={styles.text}>
              <li><strong>User Content:</strong> You retain ownership of any content you provide or that is generated through your use of the Service (“User Content”). By submitting or generating content, you grant Pathos a worldwide, royalty-free license to use, process, and display such content solely to deliver and improve the Service.</li>
              <li><strong>Temporary Processing:</strong> Pressella processes meeting recordings and transcripts only temporarily to generate marketing articles. All such data is encrypted and securely deleted after processing.</li>
              <li><strong>Consent and Compliance:</strong> You are solely responsible for ensuring that you have obtained all necessary consents from meeting participants for recording and processing meeting content.</li>
            </ul>
          </section>

          <section id="payment" className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Payment and Subscription</h2>
            <ul className={styles.text}>
              <li><strong>Subscription Model:</strong> Pressella offers both free and subscription-based tiers. If you upgrade to a paid subscription, your subscription will automatically renew on the basis selected (monthly or annual) unless canceled prior to the renewal date.</li>
              <li><strong>Billing:</strong> You authorize us to charge the payment method you provide for the applicable fees. All fees are non-refundable (except as required by law) and exclude any applicable taxes.</li>
              <li><strong>Cancellation:</strong> You may cancel your subscription at any time before the next billing cycle. Upon cancellation, you will retain access to the Service until the end of the current term.</li>
            </ul>
          </section>

          <section id="third-party" className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Third-Party Services and Integrations</h2>
            <p className={styles.text}>
              Pressella integrates with third-party platforms such as Zoom, Google Calendar, and Outlook Calendar. Your use of these services is subject to their own terms and conditions. By linking your accounts, you consent to the transfer of data between these third-party providers and Pressella solely for the purpose of delivering our Service.
            </p>
          </section>

          <section id="disclaimer" className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Disclaimers and Limitation of Liability</h2>
            <p className={styles.text}><strong>Disclaimer of Warranties:</strong></p>
            <p className={styles.text}>
              THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT ANY WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY. PATHOS MAKES NO WARRANTIES REGARDING THE SERVICE’S UNINTERRUPTED, SECURE, OR ERROR-FREE OPERATION.
            </p>
            <p className={styles.text}><strong>Limitation of Liability:</strong></p>
            <p className={styles.text}>
              TO THE FULLEST EXTENT PERMITTED BY LAW, NEITHER PATHOS NOR ITS AFFILIATES SHALL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE SERVICE. PATHOS’ TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE GREATER OF £[Equivalent to £X] OR THE AMOUNT PAID BY YOU IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section id="indemnification" className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Indemnification</h2>
            <p className={styles.text}>
              You agree to indemnify and hold harmless Pathos, its affiliates, officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising out of or related to your use of the Service, your breach of these Terms, or your violation of any law or the rights of a third party.
            </p>
          </section>

          <section id="dispute" className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Dispute Resolution</h2>
            <p className={styles.text}><strong>Binding Arbitration:</strong></p>
            <p className={styles.text}>
              Except for intellectual property claims or small claims actions, any dispute arising out of or relating to these Terms or the Service will be resolved by binding arbitration under the rules of the applicable arbitration body in England and Wales. By using the Service, you waive your right to a trial by jury or to participate in a class action.
            </p>
            <p className={styles.text}><strong>Opt-Out:</strong></p>
            <p className={styles.text}>
              If you prefer not to resolve disputes via arbitration, you may opt out by notifying us in writing within 30 days of accepting these Terms. In such event, your right to use the Service will be terminated, and any disputes will be resolved in court under the governing law set forth below.
            </p>
          </section>

          <section id="governing-law" className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Governing Law and Jurisdiction</h2>
            <p className={styles.text}>
              These Terms are governed by and construed in accordance with the laws of England and Wales. You and Pathos agree to submit to the exclusive jurisdiction of the courts located in England and Wales for any disputes arising under these Terms.
            </p>
          </section>

          <section id="termination" className={styles.section}>
            <h2 className={styles.sectionTitle}>12. Termination</h2>
            <p className={styles.text}>
              We may suspend or terminate your access to the Service at any time if you breach these Terms or for any conduct that, in our sole discretion, is deemed harmful to the Service or its users. Upon termination, your right to use the Service ceases immediately, and you must promptly delete any content obtained from the Service.
            </p>
          </section>

          <section id="modifications" className={styles.section}>
            <h2 className={styles.sectionTitle}>13. Modifications to These Terms</h2>
            <p className={styles.text}>
              Pathos reserves the right to modify these Terms at any time. If material changes are made, we will update the “Last Updated” date and, where appropriate, notify you via email or within the Service. Your continued use of the Service after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section id="miscellaneous" className={styles.section}>
            <h2 className={styles.sectionTitle}>14. Miscellaneous</h2>
            <ul className={styles.text}>
              <li><strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy and any additional terms incorporated by reference, constitute the entire agreement between you and Pathos regarding your use of the Service.</li>
              <li><strong>Assignment:</strong> You may not assign these Terms without our prior written consent. We may assign these Terms at our discretion.</li>
              <li><strong>Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.</li>
              <li><strong>Electronic Communications:</strong> By using the Service, you consent to receive communications electronically, which shall be deemed effective as provided herein.</li>
            </ul>
          </section>

          <section id="contact" className={styles.section}>
            <h2 className={styles.sectionTitle}>15. Contact Information</h2>
            <p className={styles.text}>
              If you have any questions, concerns, or comments regarding these Terms, please contact us at:
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

export default TermsAgreement;
