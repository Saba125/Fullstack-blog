import styles from "./Navbar.module.css";
import Facebook from "@/assets/facebook.png";
import Tiktok from "@/assets/tiktok.png";
import Instagram from "@/assets/instagram.png";
import { Link, useNavigate } from "react-router-dom";
import { BiAlignLeft } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";
type User = {
  username: string;
};
const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };
  const storedUser = localStorage.getItem("user");
  let userData: User | null = null;
  const navigate = useNavigate();
  try {
    userData = storedUser !== null ? JSON.parse(storedUser) : null;
    console.log(userData);
  } catch (error) {
    console.error("Error parsing stored user data:", error);
  }
  const handleLogOut = async () => {
    try {
      const res = await axios.post("http://localhost:8800/api/logout");
      const user = localStorage.setItem("user", JSON.stringify(null));
      navigate("/login");
    } catch (error) {
      console.log("Error logging out");
    }
  };
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.socials}>
          <a href="https://www.facebook.com/saba.jiadze.5">
            <img src={Facebook} alt="tiktok" />
          </a>
          <a href="">
            <img src={Instagram} alt="tiktok" />
          </a>
          <a href="">
            <img src={Tiktok} alt="tiktok" />
          </a>
        </div>
        <Link to="/" className={styles.title}>
          JeBlog
        </Link>
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
          <Link className={styles.link} to="/createblog">
            Create a blog
          </Link>
          <Link className={styles.link} to="/">
            Contact
          </Link>
          <Link className={styles.link} to="/">
            {userData ? (
              <h3 onClick={handleLogOut}>Sign out</h3>
            ) : (
              <Link to="/login">Sign in</Link>
            )}
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
