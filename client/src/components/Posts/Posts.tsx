import styles from "@/components/Posts/Posts.module.css";
import Culture from "@/assets/culture.png";
const Posts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.posts}>
        <div className={styles.imgContainer}>
          <img src={Culture} />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.date}>
            11.02.2023 - <span className={styles.category}>CULTURE</span>
          </p>
          <div className={styles.details}>
            <h3 className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae doloribus debitis, expedita perspiciatis praesentium
              impedit vitae tempora amet ipsam consectetur iste error, facere
              dignissimos eos beatae eveniet rerum quia reprehenderit.
            </p>
          </div>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
