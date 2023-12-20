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
const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
