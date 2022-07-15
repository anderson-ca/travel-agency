import styles from "../styles/Services.module.css";

const Services = () => {
  return (
    <div className={styles.services}>
      <h1>Service Tiers</h1>
      <ul className={styles.serviceTable}>
        <li className={styles.tierCard}>
          <h3>Basic</h3>
          <p>✅ Tickes</p>
          <p>❌ Hotel Booking</p>
          <p>❌ 24h Service</p>
          <p>❌ Restaurants</p>
        </li>
        <li className={styles.tierCard}>
          <h3>Basic</h3>
          <p>✅ Tickes</p>
          <p>✅ Hotel Booking</p>
          <p>❌ 24h Service</p>
          <p>❌ Restaurants</p>
        </li>
        <li className={styles.tierCard}>
          <h3>Basic</h3>
          <p>✅ Tickes</p>
          <p>✅ Hotel Booking</p>
          <p>✅ 24h Service</p>
          <p>✅ Restaurants</p>
        </li>
      </ul>
    </div>
  );
};

export default Services;
