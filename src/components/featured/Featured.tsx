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
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              atque modi cum eius delectus quisquam nam nisi iusto, repudiandae
              facere fuga repellat velit dolorem voluptate nostrum voluptatum.
              At, provident tempore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
