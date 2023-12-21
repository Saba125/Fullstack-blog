import styles from "@/components/SingleCat/SingleCat.module.css";
import Food from "@/assets/food.png";
import { TCategory } from "@/types";
import { Link } from "react-router-dom";
interface SingleCatProps {
  item: TCategory;
}
const SingleCat = ({ item }: SingleCatProps) => {
  return (
    <Link
      className={`${styles.category} ${styles[item.catName.toLowerCase()]}`}
      to={`/categories/${item.catName}`}
    >
      <h3>{item.catName}</h3>
      <img src={item.image} className={styles.categoryImg} alt={item.catName} />
    </Link>
  );
};

export default SingleCat;
