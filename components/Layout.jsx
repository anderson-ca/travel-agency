import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
