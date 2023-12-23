import SinglePost from "@/components/SinglePost/SinglePost";
import { TBlog } from "@/types";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import styles from "@/pages/CatPage/catPage.module.css";

const CategoryPage = () => {
  const params = useParams();
  const { catName } = params;
  const { data, isError, isLoading } = useQuery<TBlog[]>("allcat", () =>
    fetch(`http://localhost:8800/api/blog/${catName}`, {
      method: "GET",
    }).then((res) => res.json())
  );
  console.log(data);

  return (
    <div className="container">
      <div className={styles.wrapper}>
        {data?.length ? (
          data.map((item) => <SinglePost key={item._id} item={item} />)
        ) : (
          <div className={styles.errors}>
            <p>No posts for that category</p>
            <Link to="/">Go back to home</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
