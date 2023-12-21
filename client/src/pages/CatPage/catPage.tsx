import { useParams } from "react-router-dom";

const CategoryPage = () => {
    const params = useParams()
    console.log(params.catName)
      const {catName} = params
  return <div>
    {catName}
  </div>;
};

export default CategoryPage;
