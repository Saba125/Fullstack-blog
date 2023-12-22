import styles from "@/components/Content/Content.module.css";
import Posts from "../Posts/Posts";
import SideMenu from "../SideMenu/SideMenu";
const Content = () => {
  return (
    <div className="container">
      <h3 className={styles.title}>Recent posts</h3>
      <div className={styles.contentWrapper}>
        <div className={styles.posts}>
          <Posts />
        </div>
        <div className={styles.sideMenu}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default Content;
