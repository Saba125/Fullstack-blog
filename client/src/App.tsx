import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import NavBar from "./components/NavBar/Navbar";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CategoryPage from "./pages/CatPage/catPage";
import { Suspense } from "react";
import SinglePost from "./components/SinglePost/SinglePost";
import PostPage from "./pages/SinglePost/PostPage";
import CreateBlog from "./pages/CreateBlog/CreateBlog";
const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route
              path="/categories/:catName"
              element={<CategoryPage />}
            ></Route>
            <Route path="/blog/:id" element={<PostPage />} />
            <Route path="/createblog" element={<CreateBlog  />} />

          </Routes>
        </Suspense>
      </QueryClientProvider>
    </div>
  );
}

export default App;
