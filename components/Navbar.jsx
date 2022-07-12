import styles from "../styles/Navbar.module.css";
import { useState, useEffect, useRef } from "react";
import { ImAirplane, ImMenu } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuBtn, setMobileMenuBtn] = useState(false);
  const navMenuRef = useRef(null);

  // mobile menu
  useEffect(() => {
    navMenuRef.current.classList.toggle(`${styles.activeMobileMenu}`);
    console.log(navMenuRef.current.classList);
  }, [mobileMenuBtn]);

  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <span>TRVL</span>
        <ImAirplane />
      </div>
      <ul ref={navMenuRef} className={styles.navMenu}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/Services">Services</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/SignUp">Sign In</Link>
        </li>
      </ul>
      <div
        className={styles.mobileBtn}
        onClick={() => setMobileMenuBtn(!mobileMenuBtn)}
      >
        {mobileMenuBtn ? <AiOutlineClose /> : <ImMenu />}
      </div>
    </div>
  );
};

export default Navbar;
