import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import NavBar from "./components/NavBar/Navbar";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CategoryPage from "./pages/CatPage/catPage";
import { Suspense } from "react";
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
          </Routes>
        </Suspense>
      </QueryClientProvider>
    </div>
  );
}

export default App;
