import styles from "@/components/Categories/Categories.module.css";
import { useQuery } from "react-query";
import { TCategory } from "@/types";
import { Toaster, toast } from "sonner";
import SingleCat from "../SingleCat/SingleCat";
import { MoonLoader } from "react-spinners";
const Categories = () => {
  const { data, isError, isLoading } = useQuery<TCategory[]>("categories", () =>
    fetch("http://localhost:8800/api/categories", {
      method: "GET",
    }).then((res) => res.json())
  );
  if (isError) {
    toast.error("Error fetching");
  }
  if (isLoading) {
    return (
      <div className={styles.loading}>
        <MoonLoader color="white" size={100} />
      </div>
    );
  }
  return (
    <div className="container">
      <Toaster
        duration={3000}
        visibleToasts={1}
        expand={false}
        richColors
        position="bottom-right"
      />
      <div>
        <div className={styles.categories}>
          {/* Styles category */}
          {data?.map((category) => {
            return <SingleCat key={category._id} item={category} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
