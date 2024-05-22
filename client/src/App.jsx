import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SignInPage from "./pages/SigninPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage"
import PrivateRoute from "./components/PrivateRoute";
import AdminSignin from "./pages/AdminSignin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/admin/sign-in" element={<AdminSignin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
