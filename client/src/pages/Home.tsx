import Categories from "@/components/Categories/Categories";
import Content from "@/components/Content/Content";
import Featured from "@/components/featured/Featured";

const HomePage = () => {
    return ( 
        <div>
            <Featured />
            <Categories />
            <Content />
        </div>
     );
}
 
export default HomePage;