import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { auth } from "./components/Firebase";
import AdminDash from "./pages/AdminDash";
import Profile from "./pages/Profile";
import UserDash from "./pages/UserDash";
import { AuthProvider, useAuth } from "./hooks/useAuth";


function App() {
  const [user, setUser] = useState();

  const PrivateRoute = ({ element }) => {
    const { user } = useAuth();

    return user ? element : <Navigate to="/login" />;
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route
          path="/admin_dashboard"
          element={<PrivateRoute element={<AdminDash />} />}
        />
        <Route
          path="/user_dashboard"
          element={<PrivateRoute element={<UserDash />} />}
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </Router>
    </AuthProvider>
  );
}

export default App;
