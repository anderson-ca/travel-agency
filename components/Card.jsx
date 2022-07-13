import styles from "../styles/Card.module.css";
import Image from "next/IMAGE";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src="/iMG-9.jpeg"
          alt="card image"
          height={"100%"}
          width={"100%"}
        />
      </div>
      <div className={styles.cardInfo}>
        <h5>this is so cool , bring you family!</h5>
      </div>
    </div>
  );
};

export default Card;
