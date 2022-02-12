import { useEffect } from "react";
import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/Signup/Signup";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.config";
import { PrivateRoute } from "./pages/components/PrivateRoute/PrivateRoute";
import { useAuth } from "./context/auth/auth.context";
import { NoMatch } from "./pages/NoMatch/NoMatch";
import "./App.css";

function App() {
  const { dispatch, isUserLogin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userData) => {
      if (userData) {
        dispatch({
          type: "INITIALIZE_USER_DATA",
          payload: userData,
        });
        navigate("/home");
      } else {
        navigate("/login");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App" data-theme={"light"}>
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={<Navigate replace to={isUserLogin ? "/home" : "/login"} />}
        />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
