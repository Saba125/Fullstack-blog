import styles from "./Navbar.module.css";
import Facebook from "@/assets/facebook.png";
import Tiktok from "@/assets/tiktok.png";
import Instagram from "@/assets/instagram.png";
import { Link } from "react-router-dom";
import { BiAlignLeft } from "react-icons/bi";
import { useState } from "react";
const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(prev => !prev);
  };
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.socials}>
          <img src={Facebook} alt="tiktok" />
          <img src={Instagram} alt="tiktok" />
          <img src={Tiktok} alt="tiktok" />
        </div>
        <h3 className={styles.title}>JeBlog</h3>
        {/* Links */}
        <ul
          className={`${styles.links} ${
            menuVisible ? styles.showMenu : styles.hideMenu
          }`}
        >
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/">
            View my Blogs
          </Link>
          <Link className={styles.link} to="/">
            Create a blog
          </Link>
          <Link className={styles.link} to="/">
            Contact
          </Link>
        </ul>
        <div className={styles.burger}>
          <BiAlignLeft
            onClick={toggleMenu}
            className={styles.burgericon}
            fill="#d7d9dbff"
            size={30}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
