import styles from "@/components/featured/Featured.module.css";
import Culture from "@/assets/culture.png";
const Featured = () => {
  return (
    <div className="container">
      <div>
        <h3 className={styles.title}>
          <b>Hey, Je saba here!</b> Discover my stories and creative ideas.
        </h3>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <img src={Culture}></img>
          </div>
          <div className={styles.textContainer}>
            <h3> Vibrant Travel Escapes</h3>
            <p>
              Our first stop takes us off the beaten path, uncovering hidden
              gems that are often overlooked by traditional travel guides. From
              quaint villages nestled in the mountains to vibrant street markets
              teeming with local life, these destinations promise an authentic
              and enriching travel experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
