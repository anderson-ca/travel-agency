import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <video
        className={styles.heroVideo}
        src="/video-1.mp4"
        autoPlay
        loop
        muted
      />
      <div className={styles.heroText}>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
      </div>
    </div>
  );
};

export default Hero;
