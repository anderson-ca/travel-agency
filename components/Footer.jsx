import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerText}>
        Join the Adventure newsletter to receive our best vacation deals You can
        unsubscribe at any time.
      </div>
      <form className={styles.footerForm} action="">
        <input
          className={styles.formInput}
          placeholder="your email"
          type="email"
        />
        <button className={styles.footerBtn}>Subscribe</button>
      </form>
      <div className={styles.footerLinks}>
        <ul className={styles.contact}>
          <li className={styles.footerLink}>Reach Out</li>
          <li className={styles.footerLink}>Contact</li>
          <li className={styles.footerLink}>Support</li>
          <li className={styles.footerLink}>Destinations</li>
        </ul>
        <ul className={styles.social}>
          <li className={styles.footerLink}>Social Media</li>
          <li className={styles.footerLink}>FaceBook</li>
          <li className={styles.footerLink}>Tritter</li>
          <li className={styles.footerLink}>Facebook</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
