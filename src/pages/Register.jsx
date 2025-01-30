import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../components/Firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
    <div className="container d-flex justify-content-center align-items-center vh-100">
  <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
    <form onSubmit={handleRegister}>
      <h3 className="text-center mb-4">Sign Up</h3>

      <div className="mb-3">
        <label className="form-label text-start d-block">First Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your first name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label text-start d-block">Last Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label text-start d-block">Email Address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
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
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
      </div>

      <p className="text-center text-muted mt-3">
        Already registered?{" "}
        <a href="/login" className="text-decoration-none">
          Login here
        </a>
      </p>
    </form>
  </div>
</div>

    </>
  );
}
export default Register;