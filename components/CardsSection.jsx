import styles from "../styles/CardsSection.module.css";
import Image from "next/image";

const CardsSection = () => {
  return (
    <div className={styles.cards}>
      <h1 className={styles.title}>Check out Epic Destinations!</h1>
      <div className={styles.cardsWrapper}>
        <ul className={styles.section}>
          <li className={styles.sectionItem}>
            <>
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.image}
                  src="/img-9.jpeg"
                  alt="card image"
                  height={300}
                  width={400}
                />
              </div>
              <div className={styles.cardInfo}>
                <h5>
                  Explore the hidden waterfall deep inside the Amazon Jungle
                </h5>
              </div>
            </>
          </li>
          <li className={styles.sectionItem}>
            <>
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.image}
                  src="/img-2.jpeg"
                  alt="card image"
                  height={300}
                  width={400}
                />
              </div>
              <div className={styles.cardInfo}>
                <h5>Travel through the Islands of Bali in a Private Cruise</h5>
              </div>
            </>
          </li>
        </ul>
        <ul className={styles.section}>
          <li className={styles.sectionItem}>
            <>
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.image}
                  src="/img-3.jpeg"
                  alt="card image"
                  height={300}
                  width={400}
                />
              </div>
              <div className={styles.cardInfo}>
                <h5>Experience Football on Top of the Himilayan Mountains</h5>
              </div>
            </>
          </li>
          <li className={styles.sectionItem}>
            <>
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.image}
                  src="/img-4.jpeg"
                  alt="card image"
                  height={300}
                  width={400}
                />
              </div>
              <div className={styles.cardInfo}>
                <h5>Experience Football on Top of the Himilayan Mountains</h5>
              </div>
            </>
          </li>
          <li className={styles.sectionItem}>
            <>
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.image}
                  src="/img-8.jpeg"
                  alt="card image"
                  height={300}
                  width={400}
                />
              </div>
              <div className={styles.cardInfo}>
                <h5>Ride through the Sahara Desert on a guided camel tour</h5>
              </div>
            </>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardsSection;
