import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../components/Firebase";
import { toast } from "react-toastify";
import SignInwithGoogle from "../components/SignInWithGoogle";
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const credentials = {
    district_officer: {
      email: "district@example.com",
      password: "district123",
    },
    admin: { email: "admin@example.com", password: "admin123" },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      console.log("User logged in Successfully");

      // Show success message
      toast.success("User logged in Successfully", {
        position: "top-center",
      });

      navigate("/user_dashboard");
    } catch (error) {
      console.error("Login Error:", error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div
          className="card shadow-lg p-4"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <form onSubmit={handleSubmit}>
            <h3 className="text-center mb-4">Login</h3>

            <div className="mb-3">
              <label className="form-label text-start d-block">
                Select Role
              </label>
              <select
                className="form-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="user">User</option>
                <option value="district_officer">District Officer</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label text-start d-block">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-start d-block">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </div>
            <p className="text-center text-muted mt-3">
              Don't have an account yet?{" "}
              <a href="/register" className="text-decoration-none">
                Register
              </a>
            </p>
          </form>
          <SignInwithGoogle />
        </div>
      </div>
    </>
  );
}

export default Login;
