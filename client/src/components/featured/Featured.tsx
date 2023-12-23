import styles from "@/components/featured/Featured.module.css";
import { useQuery } from "react-query";
import { TBlog } from "@/types";
const Featured = () => {
  const { data, isError, isLoading } = useQuery<TBlog[]>("blogs", () =>
    fetch("http://localhost:8800/api/blog", {
      method: "GET",
    }).then((res) => res.json())
  );

  const firstBlog = data && data[0];

  return (
    <div className="container">
      <div>
        <h3 className={styles.title}>
          <b>Hey, Je saba here!</b> Discover my stories and creative ideas.
        </h3>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <img src={firstBlog?.image}></img>
          </div>
          <div className={styles.textContainer}>
            <h3>
              {" "}
              {firstBlog?.title ||
                "            Lorem ipsum dolor sit amet consectetur adipisicing elit."}{" "}
            </h3>
            <p>
              {firstBlog?.content ||
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariaturprovident error a accusantium iure nihil quo nobis odio fuga doloremincidunt fugiat maiores ea, deserunt atque nostrum itaque, essedolor."}
            </p>
            <button className="btn">Read more...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
