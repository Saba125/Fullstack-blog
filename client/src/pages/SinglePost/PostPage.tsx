import styles from "@/pages/SinglePost/postPage.module.css";
import { TBlog, TUser } from "@/types";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
const PostPage = () => {
  const params = useParams();
  const { id } = params;
  const { data, isError, isLoading } = useQuery<{ user: TUser; blog: TBlog }>(
    "singleblog",
    () =>
      fetch(`http://localhost:8800/api/singleblog/${id}`, {
        method: "GET",
      }).then((res) => res.json())
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error loading data</div>;
  }
  const { blog } = data;
  const { user } = data;
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img src={blog.image} />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.date}>
            {blog.createdAt.substring(0, 10)} -{" "}
            <span className={styles.category}>{blog.category}</span>
            <span className={styles.author}>
              Author: {user ? user.username : "Unknown author"}
            </span>
          </p>
          <div className={styles.details}>
            <h3 className={styles.title}>{blog.title}</h3>
            <p className={styles.desc}>{blog.content}</p>
          </div>
          <button className={styles.button}>
            <Link to="/">Back to home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
