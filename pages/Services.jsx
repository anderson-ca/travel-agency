import styles from "../styles/Services.module.css";

const Services = () => {
  return (
    <div className={styles.services}>
      <h1 className={styles.title}>Service Tiers</h1>
      <ul className={styles.serviceTable}>
        <li className={styles.tierCard}>
          <h3 className={styles.cardTitle}>Basic</h3>
          <div className={styles.cardBody}>
            <p>✅ Tickes</p>
            <p>❌ Hotel Booking</p>
            <p>❌ 24h Service</p>
            <p>❌ Restaurants</p>
          </div>
        </li>
        <li className={styles.tierCard}>
          <h3 className={styles.cardTitle}>Plus</h3>
          <div className={styles.cardBody}>
            <p>✅ Tickes</p>
            <p>✅ Hotel Booking</p>
            <p>❌ 24h Service</p>
            <p>❌ Restaurants</p>
          </div>
        </li>
        <li className={styles.tierCard}>
          <h3 className={styles.cardTitle}>Premium</h3>
          <div className={styles.cardBody}>
            <p>✅ Tickes</p>
            <p>✅ Hotel Booking</p>
            <p>✅ 24h Service</p>
            <p>✅ Restaurants</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Services;
