import styles from "../styles/CardsSection.module.css";
import Card from "./Card";

const CardsSection = () => {
  return (
    <div className={styles.cards}>
      <h1 className={styles.title}>Check out Epic Destinations!</h1>
      <div className={styles.cardsWrapper}>
        <ul className={styles.section}>
          <li className={styles.sectionItem}>
            <Card />
          </li>
          <li className={styles.sectionItem}>
            <Card />
          </li>
        </ul>
        <ul className={styles.section}>
          <li className={styles.sectionItem}>
            <Card />
          </li>
          <li className={styles.sectionItem}>
            <Card />
          </li>
          <li className={styles.sectionItem}>
            <Card />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardsSection;
