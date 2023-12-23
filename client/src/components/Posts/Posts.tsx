import styles from "@/components/Posts/Posts.module.css";
import SinglePost from "../SinglePost/SinglePost";
import { useQuery } from "react-query";
import { TBlog } from "@/types";
import { MoonLoader } from "react-spinners";
import { Toaster, toast } from "sonner";
const Posts = () => {
  const { data, isError, isLoading } = useQuery<TBlog[]>("blogs", () =>
  fetch("http://localhost:8800/api/blog", {
    method: "GET",
  }).then((res) => res.json())
);
if (isLoading) {
  return (
    <div className="loading">
      <MoonLoader color="white" size={100} />
    </div>
  )
}
if (isError) toast.error("Could not find blog")
  return (
    <div className={styles.wrapper}>
        <Toaster
        duration={3000}
        visibleToasts={1}
        expand={false}
        richColors
        position="bottom-right"
      />
      {data?.map((item) => {
        return <SinglePost item={item} key={item._id} />
      })}
    </div>
  );
};

export default Posts;
