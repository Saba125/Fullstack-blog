import styles from "@/components/Categories/Categories.module.css";
import Food from "@/assets/food.png";
import Styles from "@/assets/style.png";
import Fashion from "@/assets/fashion.png";
import Travel from "@/assets/travel.png";
import Coding from "@/assets/coding.png";
import Culture from "@/assets/culture.png";
import { useQuery } from "react-query";
import { TCategory } from "@/types";

import SingleCat from "../SingleCat/SingleCat";
const Categories = () => {
  const { data, isError, isLoading } = useQuery<TCategory[]>("categories", () =>
    fetch("http://localhost:8800/api/categories", {
      method: "GET",
    }).then((res) => res.json())
  );
  if (isLoading) return <h3 style={{color: 'white'}}>Loading...</h3>
  if (isError) return <h3 style={{color: 'white'}}>Something went wrong...</h3>

  return (
    <div className="container">
      <div>
        <div className={styles.categories}>
          {/* Styles category */}
          {data?.map((category) => {
            return <SingleCat item={category} />
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
