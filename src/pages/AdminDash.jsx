import React, { useEffect, useState } from "react";
import { auth, db } from "../components/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom"; // For routing (optional)
import { useNavigate } from "react-router-dom";
import lion_logo from "../images/lion_logo.png";
import slider1 from "../images/slider1.jpeg";
import slider2 from "../images/slider2.png";
import slider3 from "../images/slider3.png";

function AdminDash() {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      navigate = useNavigate();
      navigate("/login");
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <>
      <div style={{ display: "flex", minHeight: "100vh" }}>
  {/* Sidebar */}
  <div
    style={{
      width: "250px",
      backgroundColor: "#343a40",
      color: "white",
      height: "100vh",
    }}
    className="d-flex flex-column"
  >
    <div className="navbar navbar-dark bg-dark flex-column p-3">
      <a
        className="navbar-brand text-center"
        href="/admin_dashboard"
        style={{ fontSize: "24px" }}
      >
        डॅशबोर्ड
      </a>
    </div>

    <ul className="nav flex-column p-3">
      <li className="nav-item">
        <Link to="/admin_dashboard" className="nav-link text-white">
          मुख्यपृष्ठ
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/profile" className="nav-link text-white">
          प्रोफाइल
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/settings" className="nav-link text-white">
          सेटिंग्ज
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white " onClick={handleLogout}>
          लॉगआउट
        </Link>
      </li>
    </ul>
  </div>

  {/* Main Content Area */}
  <div style={{ flex: 1 }}>
    {/* Top Navbar */}
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        padding: "10px 20px",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="d-flex align-items-center">
        <img
          src={lion_logo}
          alt="Lion Logo"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        />
      </div>

      <form className="d-flex align-items-center">
        <input
          className="form-control me-2"
          type="search"
          placeholder="शोधा"
          aria-label="Search"
          style={{ width: "300px" }}
        />
        <button className="btn btn-outline-primary" type="submit">
          शोधा
        </button>
      </form>

      <div>
        <Link to="/logout" className="btn btn-outline-danger">
          लॉगआउट
        </Link>
      </div>
    </nav>

    {/* Dashboard Content */}
    <div className="container mt-4">
      <h1>प्रधानमंत्री पोषणशक्ती निर्माण योजना</h1>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">अलीकडील क्रियावली</h5>
              <p className="card-text">
                येथे तुम्ही तुमच्या अलीकडील क्रियावली पाहू शकता.
              </p>
              <a href="#" className="btn btn-primary">
                आधिक पाहा
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">सांख्यिकी</h5>
              <p className="card-text">
                तुमच्या वापराच्या सांख्यिकी पाहा.
              </p>
              <a href="#" className="btn btn-primary">
                सांख्यिकी पाहा
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">सेटिंग्ज</h5>
              <p className="card-text">
                तुमच्या खाते सेटिंग्ज येथे व्यवस्थापित करा.
              </p>
              <a href="#" className="btn btn-primary">
                सेटिंग्जमध्ये जा
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
export default AdminDash;
